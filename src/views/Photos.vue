<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

interface PhotoEntry {
  date: string
  title: string
  description: string
  image: string
}

const { fadeInUp, staggerFadeInUp, cleanup } = useScrollAnimation()

onMounted(() => {
  fadeInUp('.animate-title')
  staggerFadeInUp('.animate-photo', {}, 3)
})

// 照片，date代表时间，title代表标题，description代表描述，image代表照片
// 考虑到UI排版，一个时间点只能添加一张图片
// 例：
// {
//   date: '2025',
//   title: '照片1',
//   description: '照片1描述',
//   image: '照片1图片',
// },

const photos: PhotoEntry[] = [
  {
    date: 'November 2024',
    title: 'ASHG Annual Meeting',
    description:
      'Graham gives a featured plenary talk on Superb-seq at the American Society for Human Genetics meeting in Denver, CO.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
  },
  {
    date: 'October 2024',
    title: 'Salk Science at the Seaside',
    description:
      'Lab members present their research at the annual Salk Science at the Seaside event.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=800&fit=crop',
  },
  {
    date: 'September 2024',
    title: 'Lab Retreat',
    description:
      'Annual lab retreat at Torrey Pines State Beach. Team building activities and scientific discussions.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
  },
  {
    date: 'July 2024',
    title: 'Summer Lab Meeting',
    description:
      'Weekly lab meeting discussing recent progress on CRISPR perturbation experiments.',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&h=800&fit=crop',
  },
  {
    date: 'May 2024',
    title: 'New Lab Space',
    description: 'Celebrating the opening of our newly renovated lab space on the 3rd floor.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop',
  },
  {
    date: 'March 2024',
    title: 'Conference Presentation',
    description: 'Team members presenting poster at the Keystone Symposia on Single-Cell Biology.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=800&fit=crop',
  },
]
</script>

<template>
  <main class="max-w-7xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-light text-gray-800 mb-12 animate-title">Photos</h1>

    <!-- 时间线 -->
    <div class="relative">
      <div
        class="absolute top-0 bottom-0 w-0.5 bg-gray-300 left-4 md:left-1/2 md:-translate-x-1/2"
      ></div>

      <div class="space-y-12">
        <div v-for="(photo, index) in photos" :key="index" class="relative animate-photo">
          <!-- 时间点 -->
          <div
            class="absolute top-8 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white z-10 left-4 -translate-x-1/2 md:left-1/2"
          ></div>

          <!-- 照片卡片 -->
          <div
            class="md:grid md:grid-cols-2 md:gap-8 pl-12 md:pl-0"
            :class="index % 2 === 0 ? '' : 'md:flex-row-reverse'"
          >
            <!-- 左右边内容 -->
            <div
              :class="index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'"
              class="mb-4 md:mb-0"
            >
              <!-- 时间 -->
              <span
                class="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-3"
              >
                {{ photo.date }}
              </span>

              <!-- 标题 -->
              <h2 class="text-2xl font-semibold text-gray-900 mb-2">
                {{ photo.title }}
              </h2>

              <!-- 描述 -->
              <p class="text-gray-600 leading-relaxed">
                {{ photo.description }}
              </p>
            </div>

            <!-- 照片 -->
            <div
              :class="index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'"
              class="group"
            >
              <div
                class="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  :src="photo.image"
                  :alt="photo.title"
                  class="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p class="text-sm font-medium">{{ photo.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-12">
      <div class="text-center">
        <div class="w-3 h-3 bg-gray-300 rounded-full mx-auto mb-2"></div>
        <p class="text-sm text-gray-500">More photos coming soon...</p>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
