<script setup lang="ts">
interface PhotoEntry {
  date: string
  title: string
  description: string
  image: string
}

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
    <h1 class="text-4xl font-light text-gray-800 mb-12">Photos</h1>

    <!-- Timeline Container -->
    <div class="relative">
      <!-- Vertical Line - Mobile: left side, Desktop: center -->
      <div
        class="absolute top-0 bottom-0 w-0.5 bg-gray-300 left-4 md:left-1/2 md:-translate-x-1/2"
      ></div>

      <!-- Timeline Entries -->
      <div class="space-y-12">
        <div v-for="(photo, index) in photos" :key="index" class="relative">
          <!-- Timeline Dot - Mobile: left side, Desktop: center -->
          <div
            class="absolute top-8 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white z-10 left-4 -translate-x-1/2 md:left-1/2"
          ></div>

          <!-- Photo Card -->
          <div
            class="md:grid md:grid-cols-2 md:gap-8 pl-12 md:pl-0"
            :class="index % 2 === 0 ? '' : 'md:flex-row-reverse'"
          >
            <!-- Left/Right Content Based on Index -->
            <div
              :class="index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'"
              class="mb-4 md:mb-0"
            >
              <!-- Date Badge -->
              <span
                class="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-3"
              >
                {{ photo.date }}
              </span>

              <!-- Title -->
              <h2 class="text-2xl font-semibold text-gray-900 mb-2">
                {{ photo.title }}
              </h2>

              <!-- Description -->
              <p class="text-gray-600 leading-relaxed">
                {{ photo.description }}
              </p>
            </div>

            <!-- Photo -->
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
                <!-- Overlay on hover -->
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

    <!-- End of Timeline Marker -->
    <div class="flex justify-center mt-12">
      <div class="text-center">
        <div class="w-3 h-3 bg-gray-300 rounded-full mx-auto mb-2"></div>
        <p class="text-sm text-gray-500">More photos coming soon...</p>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
