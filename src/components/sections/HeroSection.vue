<template>
  <div ref="heroSection" id="home"
    class="h-full w-full flex justify-center items-center py-12 relative overflow-hidden bg-secondary text-text">

    <!-- Background image -->
    <div class="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20">
      <img src="/assets/hero-bg.png" alt="projects background" class="w-full h-full object-cover" /> 
    </div>

    <div class="absolute inset-0 bg-white/20 pointer-events-none"></div>


    <!-- Hero content -->
    <div ref="heroContent"
      class="relative z-10 w-full h-auto max-h-full overflow-y-auto px-4 md:px-6 xl:px-10 py-6 scroll-smooth">
      <h1 class="font-bold uppercase md:text-xl lg:text-2xl">
        Hi, I'm <br />
        <span ref="splitTextEl" class="text-primary text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
          <!-- We'll split and render letters in JS -->
        </span>
      </h1>
      <p class="md:text-xl lg:text-2xl mb-6 max-w-xl lg:max-w-3xl">
        A proficient
        <span class="font-semibold capitalize">Frontend Developer</span> building
        modern, responsive web applications and crafting efficient digital
        solutions for the maritime industry.
      </p>

      <div class="flex flex-wrap gap-4">
        <BaseButton variant="primary" @click="handleGoTo(3)">
          View My Works
        </BaseButton>

        <BaseButton variant="outline" @click="handleGoTo(5)">
          Contact Me
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BaseButton from "@/components/utilities/BaseButton.vue";

const heroSection = ref(null);
const heroContent = ref(null);
const splitTextEl = ref(null);

const emit = defineEmits(["goTo"]);
const handleGoTo = (ind) => {
  emit("goTo", ind);
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const textEl = splitTextEl.value;
  const text = "Martin Isonguyo";

  // Clear container
  textEl.textContent = "";

  const words = text.split(" ");

  words.forEach((word) => {
    const wordSpan = document.createElement("span");
    wordSpan.style.display = "inline-block";
    wordSpan.style.marginRight = "0.25em";

    word.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      charSpan.style.display = "inline-block";
      charSpan.style.opacity = "0";
      charSpan.style.transform = "translateY(20px)";
      wordSpan.appendChild(charSpan);
    });

    textEl.appendChild(wordSpan);
  });

  // Create timeline for the entire heroContent animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection.value,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Animate split letters first
  tl.to(splitTextEl.value.querySelectorAll("span > span"), {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.05,
    ease: "power2.out",
  })

    // Then animate paragraph
    .from(
      heroContent.value.querySelector("p"),
      {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
      },
      ">0.2" // start 0.2 seconds after letters finish
    )

    // Then animate buttons
    .from(
      heroContent.value.querySelectorAll("button"),
      {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.2,
      },
      ">0.1" // start 0.1 seconds after paragraph animation starts
    );
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<style scoped>
.hero-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23183b4e' fill-opacity='0.5'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 40px 40px;
  background-repeat: repeat;
}

/* Gradient mask to fade top and bottom */
.mask-gradient {
  mask-image: linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%);
}
</style>
