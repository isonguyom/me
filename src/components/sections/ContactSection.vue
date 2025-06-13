<template>
  <div ref="contactSection"
    class="h-full w-full flex justify-center items-center py-12 relative bg-primary bg-gradient-to-br from-primary to-black/60 text-background"
    id="contact">

    
    <!-- Top right pattern -->
 <div class="absolute top-0 right-0 flex justify-center items-center pointer-events-none w-[150px] lg:w-[200px]">
      <img src="/assets/top-right.svg" alt="about background" class="w-full opacity-10" />
    </div>

    <!-- Bottom Left pattern --> 
    <div class="absolute bottom-0 left-0 flex justify-center items-center pointer-events-none w-[150px] lg:w-[200px]">
      <img src="/assets/bottom-left.svg" alt="about background" class="w-full opacity-10" />
    </div>

    <div class="absolute inset-0 bg-black/10 pointer-events-none"></div>

    <div ref="scrollContainer"
      class="relative z-10 w-full max-w-3xl lg:max-w-full h-auto max-h-full overflow-y-auto px-4 md:px-6 xl:px-10 py-6 scroll-smooth custom-scrollbar">

      <div class="w-full h-auto flex flex-col lg:flex-row gap-8 justify-between lg:items-center">
        <!-- Left side text -->
        <div class="flex-1 space-y-4">
          <h3
            class="lg:flex flex-col lg:text-center text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-secondary font-bold font-heading">
            <span>Reach out.</span> <span>Let’s create</span> <span>something</span> <span>amazing!</span>
          </h3>
          <address class="not-italic text-white space-y-1">
            <p><span class="font-semibold">Phone:</span> <a href="tel:+2348022475918"
                class="opacity-80 hover:text-accent hover:opacity-100 transition-colors duration-300">+2348022475918</a>
            </p>
            <p><span class="font-semibold">Email:</span> <a href="mailto:isonguyombiz@gmail.com"
                class="opacity-80 hover:text-accent hover:opacity-100 transition-colors duration-300">isonguyombiz@gmail.com</a>
            </p>
          </address>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="flex-1 space-y-4" novalidate aria-label="Contact form">
          <InputField v-model="form.name" label="Your Name" placeholder="Enter your name" id="name" :error="errors.name"
            required />

          <InputField v-model="form.email" type="email" label="Your Email" placeholder="Enter your email" id="email"
            :error="errors.email" required />

          <TextareaField v-model="form.message" label="Your Message" placeholder="Write your message here..."
            id="message" :error="errors.message" required />


          <div class="w-fit ml-auto">
            <BaseButton variant="secondary" type="submit" :disabled="isSending" aria-busy="isSending">
              {{ isSending ? 'Sending...' : 'Send Message' }}
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
    <Toast ref="toastRef" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'

import InputField from '@/components/utilities/InputField.vue'
import TextareaField from '@/components/utilities/TextareaField.vue'
import BaseButton from '@/components/utilities/BaseButton.vue'
import Toast from '@/components/utilities/Toast.vue'

gsap.registerPlugin(ScrollTrigger)

// Reactive state for form data and errors
const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  message: ''
})

// Reactive state for form submission   
const isSending = ref(false)
const toastRef = ref(null)

// Refs for the contact section and scroll container
const contactSection = ref(null)
const scrollContainer = ref(null)

// Validate form fields
function validateForm() {
  let valid = true
  errors.value = { name: '', email: '', message: '' }

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required'
    valid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email'
    valid = false
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required'
    valid = false
  }

  return valid
}

// Handle form submission
async function handleSubmit() {
  if (!validateForm()) return

  isSending.value = true

  try {
    await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message
      },
      import.meta.env.VITE_USER_ID
    )

    toastRef.value.addToast({ message: 'Message sent successfully!', type: 'success' })
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('EmailJS Error:', error)
    toastRef.value.addToast({ message: 'Something went wrong. Please try again.', type: 'error' })
  } finally {
    isSending.value = false
  }
}

// Handle scroll events to prevent default behavior
function handleWheel(e) {
  const el = scrollContainer.value
  if (!el) return

  const scrollTop = el.scrollTop
  const maxScroll = el.scrollHeight - el.clientHeight
  const delta = e.deltaY

  // Scroll up
  if (delta < 0 && scrollTop > 0) {
    e.stopPropagation()
  }

  // Scroll down
  else if (delta > 0 && scrollTop < maxScroll) {
    e.stopPropagation()
  }
}


// Add wheel event listener to the scroll container
onMounted(() => {
  const el = scrollContainer.value
  if (el) {
    el.addEventListener('wheel', handleWheel, { passive: false })
  }
})


// GSAP Scroll Animation
onMounted(async () => {
  await nextTick()
  if (!contactSection.value) return

  gsap.fromTo(
    contactSection.value.children[0],
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: contactSection.value,
        start: 'top 80%',
      }
    }
  )
})

onBeforeUnmount(() => {
  const el = scrollContainer.value
  if (el) {
    el.removeEventListener('wheel', handleWheel)
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

</script>
