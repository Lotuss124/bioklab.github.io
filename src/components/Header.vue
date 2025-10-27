<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-gray-900 text-white">
    <nav class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Lab Name -->
        <div class="text-lg font-light">McVicker Lab</div>

        <!-- Navigation Links -->
        <ul class="flex items-center gap-6 text-sm">
          <li>
            <RouterLink to="/" class="hover:text-gray-300 transition-colors">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/news" class="hover:text-gray-300 transition-colors">News</RouterLink>
          </li>
          <li>
            <RouterLink to="/people" class="hover:text-gray-300 transition-colors"
              >People</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/photos" class="hover:text-gray-300 transition-colors"
              >Photos</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/publications" class="hover:text-gray-300 transition-colors"
              >Publications</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/software" class="hover:text-gray-300 transition-colors"
              >Software</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/join" class="hover:text-gray-300 transition-colors">Join</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-gray-300 transition-colors"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
