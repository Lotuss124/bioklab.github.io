<script setup lang="ts">
interface Publication {
  authors: string
  year: number
  title: string
  journal: string
  type: 'preprint' | 'journal'
  link?: string
}

defineProps<{
  publication: Publication
}>()

function formatAuthors(authors: string): string {
  return authors.replace(/McVicker G[#*]?/g, '<strong class="text-gray-900">McVicker G</strong>')
}
</script>

<template>
  <article
    class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100"
  >
    <!-- Year Badge -->
    <div class="flex items-start justify-between mb-3">
      <span class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded">
        {{ publication.year }}
      </span>
      <span
        class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full"
        :class="{
          'bg-amber-100 text-amber-800': publication.type === 'preprint',
          'bg-blue-100 text-blue-800': publication.type === 'journal',
        }"
      >
        <svg
          v-if="publication.type === 'preprint'"
          class="w-3.5 h-3.5 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
          />
          <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        </svg>
        <svg v-else class="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
          />
        </svg>
        {{ publication.type === 'preprint' ? 'Preprint' : 'Journal' }}
      </span>
    </div>

    <!-- Title -->
    <h3 class="text-lg font-semibold text-gray-900 mb-3 leading-snug">
      <a
        v-if="publication.link"
        :href="publication.link"
        class="hover:text-blue-600 transition-colors"
      >
        {{ publication.title }}
      </a>
      <span v-else>{{ publication.title }}</span>
    </h3>

    <!-- Authors -->
    <p class="text-sm text-gray-600 mb-2 leading-relaxed">
      <span v-html="formatAuthors(publication.authors)"></span>
    </p>

    <!-- Journal -->
    <p class="text-sm italic text-gray-700 font-medium">{{ publication.journal }}</p>
  </article>
</template>

<style scoped></style>
