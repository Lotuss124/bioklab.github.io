<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue'

interface Link {
  type: 'cv' | 'scholar' | 'email'
  url?: string
  label?: string
}

interface Person {
  name: string
  role: string
  image: string
  bio: string
  links?: Link[]
}

const props = defineProps<{
  person: Person | null
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

// 处理 ESC 键关闭弹窗
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

// 防止背景滚动
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
)

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen && person"
      class="fixed inset-0 z-50 overflow-y-auto"
      @click.self="emit('close')"
    >
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/50 backdrop-blur-md transition-colors duration-300"></div>

      <!-- Modal Container -->
      <div class="flex min-h-full items-center justify-center p-0 md:p-4">
        <Transition
          enter-active-class="transition ease-out duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="isOpen"
            class="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full mx-4"
            @click.stop
          >
            <!-- Close Button -->
            <button
              @click="emit('close')"
              class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              aria-label="Close"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <!-- Modal Content -->
            <div class="p-8 ">
              <!-- Header with Image and Basic Info -->
              <div class="flex flex-col md:flex-row gap-6 mb-6">
                <!-- Avatar -->
                <div class="shrink-0">
                  <img
                    :src="person.image"
                    :alt="person.name"
                    class="w-40 h-40 rounded-full object-cover ring-4 ring-gray-100 mx-auto md:mx-0"
                  />
                </div>

                <!-- Info -->
                <div class="flex-1 text-center md:text-left">
                  <h2 class="text-3xl font-bold text-gray-900 mb-2">
                    {{ person.name }}
                  </h2>
                  <p class="text-lg font-medium text-blue-600 mb-4">
                    {{ person.role }}
                  </p>

                  <!-- Links -->
                  <div
                    v-if="person.links && person.links.length > 0"
                    class="flex flex-wrap gap-3 justify-center md:justify-start"
                  >
                    <a
                      v-for="(link, linkIndex) in person.links"
                      :key="linkIndex"
                      :href="link.url"
                      target="_blank"
                      class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                      :class="{
                        'bg-blue-100 text-blue-700 hover:bg-blue-200': link.type === 'cv',
                        'bg-green-100 text-green-700 hover:bg-green-200': link.type === 'scholar',
                        'bg-gray-100 text-gray-700 hover:bg-gray-200': link.type === 'email',
                      }"
                    >
                      <!-- CV Icon -->
                      <svg
                        v-if="link.type === 'cv'"
                        class="w-4 h-4"
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
                        class="w-4 h-4"
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
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                        />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>{{ link.label }}</span>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Divider -->
              <div class="border-t border-gray-200 my-6"></div>

              <!-- Biography -->
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Biography</h3>
                <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                  {{ person.bio }}
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<style scoped></style>
