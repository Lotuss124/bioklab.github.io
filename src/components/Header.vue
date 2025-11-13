<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
    <nav class="max-w-7xl mx-auto px-6 py-4 relative">
      <div class="flex items-center justify-between">
        <RouterLink
          to="/"
          class="text-lg font-bold hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          BioKLab
        </RouterLink>

        <ul class="hidden md:flex items-center gap-1 text-sm">
          <li>
            <RouterLink
              to="/"
              class="px-4 py-2 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-b-2 border-white"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/news"
              class="px-4 py-2 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-b-2 border-white"
              >News</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/people"
              class="px-4 py-2 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-b-2 border-white"
              >People</RouterLink
            >
          </li>
          <!-- <li>
            <RouterLink
              to="/photos"
              class="px-4 py-2 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-b-2 border-white"
              >Photos</RouterLink
            >
          </li> -->
          <li>
            <RouterLink
              to="/publications"
              class="px-4 py-2 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-b-2 border-white"
              >Publications</RouterLink
            >
          </li>
          <!-- <li>
            <RouterLink
              to="/software"
              class="px-4 py-2 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-b-2 border-white"
              >Software</RouterLink
            >
          </li> -->
          <li>
            <RouterLink
              to="/join"
              class="px-4 py-2 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-b-2 border-white"
              >Join</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="px-4 py-2 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-b-2 border-white"
              >Contact</RouterLink
            >
          </li>
        </ul>

        <!-- 移动端 -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <ul
          v-if="mobileMenuOpen"
          class="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg space-y-1 py-4 border-t border-gray-800"
        >
          <li>
            <RouterLink
              to="/"
              @click="closeMobileMenu"
              class="block px-4 py-3 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-l-4 border-white"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/news"
              @click="closeMobileMenu"
              class="block px-4 py-3 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-l-4 border-white"
              >News</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/people"
              @click="closeMobileMenu"
              class="block px-4 py-3 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-l-4 border-white"
              >People</RouterLink
            >
          </li>
          <!-- <li>
            <RouterLink
              to="/photos"
              @click="closeMobileMenu"
              class="block px-4 py-3 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-l-4 border-white"
              >Photos</RouterLink
            >
          </li> -->
          <li>
            <RouterLink
              to="/publications"
              @click="closeMobileMenu"
              class="block px-4 py-3 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-l-4 border-white"
              >Publications</RouterLink
            >
          </li>
          <!-- <li>
            <RouterLink
              to="/software"
              @click="closeMobileMenu"
              class="block px-4 py-3 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-l-4 border-white"
              >Software</RouterLink
            >
          </li> -->
          <li>
            <RouterLink
              to="/join"
              @click="closeMobileMenu"
              class="block px-4 py-3 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-l-4 border-white"
              >Join</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              @click="closeMobileMenu"
              class="block px-4 py-3 hover:text-white transition-all duration-200 active:bg-gray-950"
              active-class="bg-gray-800 text-white border-l-4 border-white"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </Transition>
    </nav>
  </header>
</template>

<style scoped></style>
