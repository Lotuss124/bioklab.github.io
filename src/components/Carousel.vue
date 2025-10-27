<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface CarouselImage {
  src: string
  alt: string
}

const props = defineProps<{
  images: CarouselImage[]
  autoplay?: boolean
  interval?: number
}>()

const currentIndex = ref(0)
let autoplayTimer: number | null = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

const startAutoplay = () => {
  if (props.autoplay && props.interval) {
    autoplayTimer = window.setInterval(() => {
      nextSlide()
    }, props.interval)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <div
    class="relative w-full overflow-hidden group"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Images -->
    <div class="relative h-64 md:h-96">
      <transition-group name="fade" mode="out-in">
        <div
          v-for="(image, index) in images"
          v-show="index === currentIndex"
          :key="index"
          class="absolute inset-0"
        >
          <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
        </div>
      </transition-group>
    </div>

    <!-- Previous Button -->
    <button
      @click="prevSlide"
      class="absolute rounded-full left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 transition-all opacity-0 group-hover:opacity-100"
      aria-label="Previous slide"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Next Button -->
    <button
      @click="nextSlide"
      class="absolute right-4 rounded-full top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 transition-all opacity-0 group-hover:opacity-100"
      aria-label="Next slide"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full border-2 border-white transition-all"
        :class="index === currentIndex ? 'bg-white' : 'bg-transparent hover:bg-white/50'"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
