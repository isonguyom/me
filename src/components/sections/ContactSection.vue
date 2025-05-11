<template>
  <section
    class="h-screen bg-gradient-to-br from-secondary to-secondary/90 text-background flex flex-col justify-center items-center px-3 md:px-6 py-5 relative"
    id="contact">
    <SectionTitle title="Contact me" subtitle="Let's talk" />
    <div
      class="max-w-xl lg:max-w-full w-full h-full overflow-y-auto px-2 flex flex-col lg:flex-row justify-between items-center gap-6">
      <div class="lg:basis-1/2 xl:pr-10">
        <h2 class="text-2xl text-center md:text-3xl lg:text-left font-semibold font-heading text-primary mb-4">Let's
          Talk
        </h2>
        <p class="opacity-80 hidden lg:block text-lg xl:text-xl text-pretty">
          I’m always open to new opportunities and collaborations, especially where tech meets the maritime industry.
          If you're interested in working together or have a project in mind, don’t hesitate to reach out. Let’s create
          something amazing!
        </p>
      </div>
      <form @submit.prevent="sendEmail" class="space-y-3 w-full lg:basis-1/2">
        <InputField v-model="form.name" label="Your Name" placeholder="Enter your name" id="name" />
        <InputField v-model="form.email" type="email" label="Your Email" placeholder="Enter your email" id="email" />
        <TextareaField v-model="form.message" label="Your Message" placeholder="Write your message here..."
          id="message" />

        <Toast ref="toastRef" />
        <div class="ml-auto w-fit">
          <BaseButton variant="primary" type="submit" :disabled="isSending">{{ isSending ? 'Sending...' : 'Send Message'
          }}</BaseButton>

        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

import SectionTitle from '@/components/SectionTitle.vue'
import InputField from '@/components/utilities/InputField.vue'
import TextareaField from '@/components/utilities/TextareaField.vue'
import BaseButton from '@/components/utilities/BaseButton.vue'
import Toast from '@/components/utilities/Toast.vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSending = ref(false)

const toastRef = ref(null)

const sendEmail = async () => {
  isSending.value = true
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message
      },
      import.meta.env.VITE_USER_ID
    )
    toastRef.value.addToast({
      message: 'Message sent successfully!',
      type: 'success',
    })
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('EmailJS Error:', error)
    toastRef.value.addToast({
      message: 'Something went wrong. Please try again.',
      type: 'error',
    })
  } finally {
    isSending.value = false
  }
}
</script>
