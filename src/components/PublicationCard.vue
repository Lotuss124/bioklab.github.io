<script setup lang="ts">
interface Publication {
  authors: string
  year: number
  title: string
  journal: string
  type: 'preprint' | 'journal' | 'conference'
  link?: string
  correspondingAuthor?: string 
}

const props = defineProps<{
  publication: Publication
}>()

function formatAuthors(authors: string, correspondingAuthor?: string): string {
  // 如果指定了通讯作者，则加粗该作者
  const authorToHighlight = correspondingAuthor || ''
  // 使用正则表达式匹配作者名（包含可能的 # 或 * 符号）
  const regex = new RegExp(`${authorToHighlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[#*]?`, 'g')
  return authors.replace(regex, `<strong class="text-gray-900">${authorToHighlight}</strong>`)
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
          'bg-purple-100 text-purple-800': publication.type === 'conference',
        }"
      >
        <!-- Preprint Icon -->
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
        <!-- Journal Icon -->
        <svg
          v-else-if="publication.type === 'journal'"
          class="w-3.5 h-3.5 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
          />
        </svg>
        <!-- Conference Icon -->
        <svg
          v-else-if="publication.type === 'conference'"
          class="w-3.5 h-3.5 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
          />
        </svg>
        {{
          publication.type === 'preprint'
            ? 'Preprint'
            : publication.type === 'journal'
              ? 'Journal'
              : 'Conference'
        }}
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
      <span v-html="formatAuthors(publication.authors, publication.correspondingAuthor)"></span>
    </p>

    <!-- Journal -->
    <p class="text-sm italic text-gray-700 font-medium">{{ publication.journal }}</p>
  </article>
</template>

<style scoped></style>
