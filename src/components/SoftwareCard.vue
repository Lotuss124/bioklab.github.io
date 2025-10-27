<script setup lang="ts">
interface Link {
  type: 'paper' | 'github' | 'preprint'
  url: string
  label: string
}

interface Software {
  name: string
  description: string
  author?: string
  links: Link[]
  badge?: string
}

defineProps<{
  software: Software
}>()
</script>

<template>
  <article
    class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
  >
    <!-- Card Header -->
    <div class="bg-linear-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
      <div class="flex items-start justify-between">
        <h2 class="text-2xl font-bold text-gray-900">{{ software.name }}</h2>
        <span
          v-if="software.badge"
          class="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full"
        >
          {{ software.badge }}
        </span>
      </div>
    </div>

    <!-- Card Body -->
    <div class="p-6 flex-1 flex flex-col">
      <!-- Description -->
      <p class="text-gray-700 leading-relaxed mb-4 flex-1">
        {{ software.description }}
      </p>

      <!-- Author (if exists) -->
      <p v-if="software.author" class="text-sm text-gray-500 italic mb-4">
        Written by {{ software.author }}
      </p>

      <!-- Links -->
      <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
        <a
          v-for="(link, linkIndex) in software.links"
          :key="linkIndex"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
          :class="{
            'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md':
              link.type === 'paper',
            'bg-gray-800 text-white hover:bg-gray-900 shadow-sm hover:shadow-md':
              link.type === 'github',
            'bg-teal-600 text-white hover:bg-teal-700 shadow-sm hover:shadow-md':
              link.type === 'preprint',
          }"
        >
          <!-- Paper Icon -->
          <svg v-if="link.type === 'paper'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
            />
          </svg>
          <!-- GitHub Icon -->
          <svg
            v-else-if="link.type === 'github'"
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
              clip-rule="evenodd"
            />
          </svg>
          <!-- Preprint Icon -->
          <svg
            v-else-if="link.type === 'preprint'"
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
            />
            <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
          </svg>
          <span>{{ link.label }}</span>
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
