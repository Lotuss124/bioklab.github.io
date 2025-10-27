<script setup lang="ts">
interface Link {
  type: 'cv' | 'scholar' | 'email'
  url: string
  label?: string
}

interface Person {
  name: string
  role: string
  image: string
  bio: string
  links?: Link[]
}

defineProps<{
  person: Person
}>()

const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <div
    @click="emit('click')"
    class="bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
  >
    <!-- Card Content -->
    <div class="p-6">
      <!-- Avatar and Basic Info -->
      <div class="flex flex-col items-center text-center mb-4">
        <div class="relative mb-4">
          <img
            :src="person.image"
            :alt="person.name"
            class="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300"
          />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-1">
          {{ person.name }}
        </h3>
        <p class="text-sm font-medium text-blue-600 mb-4">
          {{ person.role }}
        </p>
      </div>

      <!-- Bio -->
      <p class="text-sm text-gray-600 leading-relaxed mb-4 text-left line-clamp-4">
        {{ person.bio }}
      </p>

      <!-- Links -->
      <div
        v-if="person.links && person.links.length > 0"
        class="flex flex-wrap gap-2 justify-center pt-4 border-t border-gray-100"
      >
        <a
          v-for="(link, linkIndex) in person.links"
          :key="linkIndex"
          :href="link.url"
          @click.stop
          class="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full transition-colors"
          :class="{
            'bg-blue-100 text-blue-700 hover:bg-blue-200': link.type === 'cv',
            'bg-green-100 text-green-700 hover:bg-green-200': link.type === 'scholar',
            'bg-gray-100 text-gray-700 hover:bg-gray-200': link.type === 'email',
          }"
        >
          <!-- CV Icon -->
          <svg
            v-if="link.type === 'cv'"
            class="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
            />
            <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
          </svg>
          <!-- Scholar Icon -->
          <svg
            v-else-if="link.type === 'scholar'"
            class="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
            />
          </svg>
          <!-- Email Icon -->
          <svg
            v-else-if="link.type === 'email'"
            class="w-3.5 h-3.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>{{ link.label }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Line clamp utility for bio text */
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
