<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

let lenis: Lenis | null = null

onMounted(() => {
  // 初始化 Lenis
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 2,
  })

  // 动画循环
  function raf(time: number) {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onUnmounted(() => {
  lenis?.destroy()
})
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style>
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}
</style>
