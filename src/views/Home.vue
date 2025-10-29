<script setup lang="ts">
import { onMounted } from 'vue'
import Carousel from '../components/Carousel.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const carouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=400&fit=crop',
    alt: 'Salk Institute Building',
  },
  {
    src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=400&fit=crop',
    alt: 'Laboratory Research',
  },
  {
    src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&h=400&fit=crop',
    alt: 'Scientific Equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1200&h=400&fit=crop',
    alt: 'Microscopy Lab',
  },
]

const { fadeInUp, staggerFadeInUp } = useScrollAnimation()

onMounted(() => {
  fadeInUp('.animate-title')
  fadeInUp('.animate-text')
  staggerFadeInUp('.animate-pillar')
})
</script>

<template>
  <main>
    <!-- 轮播图区域 -->
    <Carousel :images="carouselImages" :autoplay="true" :interval="5000" />

    <!-- 主要内容 -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <h1 class="animate-title text-3xl md:text-4xl font-light text-gray-800 mb-6">
        Welcome to the McVicker Laboratory
      </h1>

      <p class="animate-text text-gray-700 leading-relaxed mb-4">
        The McVicker Laboratory studies how human genetic variation affects chromatin state and gene
        regulation. Our vision is to understand the regulatory function of every non-coding genetic
        variant in every cell type. This knowledge would reveal biological mechanisms underlying
        disease and support development of personalized therapies to treat disease.
      </p>

      <p class="animate-text text-gray-700 leading-relaxed mb-12">
        To achieve this vision we use a combination of natural genetic variation, genome
        perturbations, and computational analysis.
      </p>

      <!-- 三个研究方向卡片 -->
      <div class="space-y-8 md:space-y-10">
        <div
          class="animate-pillar flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6"
        >
          <div class="shrink-0">
            <div
              class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-green-200 flex items-center justify-center"
            >
              <!-- DNA图标 -->
              <svg
                class="w-12 h-12 md:w-16 md:h-16 text-green-800"
                fill="currentColor"
                viewBox="0 0 640 640"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M480 64C497.7 64 512 78.3 512 96C512 153.8 487.6 200.8 454.6 240.5C430.5 269.4 400.8 295.6 371 320C400.8 344.5 430.5 370.6 454.6 399.5C487.6 439.1 512 486.2 512 544C512 561.7 497.7 576 480 576C462.3 576 448 561.7 448 544L192 544C192 561.7 177.7 576 160 576C142.3 576 128 561.7 128 544C128 486.2 152.4 439.2 185.4 399.5C209.5 370.6 239.2 344.5 269 320C239.2 295.5 209.5 269.4 185.4 240.5C152.4 200.8 128 153.8 128 96C128 78.3 142.3 64 160 64C177.7 64 192 78.3 192 96L448 96C448 78.3 462.3 64 480 64zM411.5 448L228.6 448C220.4 458.5 213.5 469.1 208 480L432.2 480C426.6 469.1 419.7 458.5 411.6 448zM366 400C351.7 387 336.2 374.2 320 361C303.8 374.1 288.3 387 274 400L366 400zM228.5 192L411.4 192C419.6 181.5 426.5 170.9 432 160L207.9 160C213.5 170.9 220.4 181.5 228.5 192zM274 240C288.3 253 303.8 265.8 320 279C336.2 265.9 351.7 253 366 240L274 240z"
                />
              </svg>
            </div>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h2 class="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Natural Genetic Variation.
            </h2>
            <p class="text-gray-700 leading-relaxed text-sm md:text-base">
              We use germline genetic variation as well as somatic mutations to identify genetic
              variants associated with changes in chromatin and gene expression. To identify these
              associations, we map molecular quantitative trait loci (QTLs) and analyze allele
              specific expression.
            </p>
          </div>
        </div>

        <div
          class="animate-pillar flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6"
        >
          <div class="shrink-0">
            <div
              class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-200 flex items-center justify-center"
            >
              <!-- 试管icon -->
              <svg
                class="w-12 h-12 md:w-16 md:h-16 text-blue-800"
                fill="currentColor"
                viewBox="0 0 640 640"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M96 64C78.3 64 64 78.3 64 96C64 113.7 78.3 128 96 128L96 480C96 533 139 576 192 576C245 576 288 533 288 480L288 128L352 128L352 480C352 533 395 576 448 576C501 576 544 533 544 480L544 128C561.7 128 576 113.7 576 96C576 78.3 561.7 64 544 64L96 64zM224 128L224 256L160 256L160 128L224 128zM480 128L480 256L416 256L416 128L480 128z"
                />
              </svg>
            </div>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h2 class="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Genome Perturbations.
            </h2>
            <p class="text-gray-700 leading-relaxed text-sm md:text-base">
              We use CRISPR technologies and reporter assays to perturb the genome and determine how
              sequences affect chromatin and gene expression.
            </p>
          </div>
        </div>

        <div
          class="animate-pillar flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6"
        >
          <div class="shrink-0">
            <div
              class="w-24 h-24 md:w-32 md:h-32 rounded-full bg-red-200 flex items-center justify-center"
            >
              <!-- 滴管icon -->
              <svg
                class="w-12 h-12 md:w-16 md:h-16 text-red-800"
                fill="currentColor"
                viewBox="0 0 640 640"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M405.6 93.2L304 194.8L294.6 185.4C282.1 172.9 261.8 172.9 249.3 185.4C236.8 197.9 236.8 218.2 249.3 230.7L409.3 390.7C421.8 403.2 442.1 403.2 454.6 390.7C467.1 378.2 467.1 357.9 454.6 345.4L445.2 336L546.8 234.4C585.8 195.4 585.8 132.2 546.8 93.3C507.8 54.4 444.6 54.3 405.7 93.3zM119.4 387.3C104.4 402.3 96 422.7 96 443.9L96 486.3L69.4 526.2C60.9 538.9 62.6 555.8 73.4 566.6C84.2 577.4 101.1 579.1 113.8 570.6L153.7 544L196.1 544C217.3 544 237.7 535.6 252.7 520.6L362.1 411.2L316.8 365.9L207.4 475.3C204.4 478.3 200.3 480 196.1 480L160 480L160 443.9C160 439.7 161.7 435.6 164.7 432.6L274.1 323.2L228.8 277.9L119.4 387.3z"
                />
              </svg>
            </div>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h2 class="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Computational Analysis.
            </h2>
            <p class="text-gray-700 leading-relaxed text-sm md:text-base">
              We use machine learning method and statistical methods analyze genomic datasets and to
              predict which variants affect chromatin and gene expression.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
