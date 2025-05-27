<template>
  <section :class="sectionClass">
    <div class="outer">
      <div class="inner">
        <div class="bg" :style="bgStyle">
          <h2 class="section-heading">{{ headingText }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  sectionClass: String,
  headingText: String,
  backgroundImage: String,
})

const bgStyle = computed(() => ({
  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('${props.backgroundImage}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))
</script>

<style scoped>
.outer,
.inner {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  will-change: transform;
}

.bg {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
}

.section-heading {
  z-index: 2;
  font-size: clamp(1rem, 5vw, 5rem);
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.5em;
  margin-right: -0.5em;
  color: hsl(0, 0%, 80%);
  width: 90vw;
  max-width: 1200px;
  text-transform: uppercase;
}

.clip-text {
  overflow: hidden;
}
</style>
