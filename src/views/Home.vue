<script setup lang="ts"></script>

<template>
  <main>
    <!-- Hero Image Section -->
    <div class="w-full">
      <img
        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=400&fit=crop"
        alt="Salk Institute"
        class="w-full h-64 md:h-96 object-cover"
      />
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- Welcome Section -->
      <h1 class="text-3xl md:text-4xl font-light text-gray-800 mb-6">
        Welcome to the McVicker Laboratory
      </h1>

      <p class="text-gray-700 leading-relaxed mb-4">
        The McVicker Laboratory studies how human genetic variation affects chromatin state and gene
        regulation. Our vision is to understand the regulatory function of every non-coding genetic
        variant in every cell type. This knowledge would reveal biological mechanisms underlying
        disease and support development of personalized therapies to treat disease.
      </p>

      <p class="text-gray-700 leading-relaxed mb-12">
        To achieve this vision we use a combination of natural genetic variation, genome
        perturbations, and computational analysis.
      </p>

      <!-- Three Pillars Section -->
      <div class="space-y-8">
        <!-- Natural Genetic Variation -->
        <div class="flex items-start gap-6">
          <div class="shrink-0">
            <div class="w-32 h-32 rounded-full bg-green-200 flex items-center justify-center">
              <svg class="w-16 h-16 text-green-800" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
                <circle cx="8" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="16" cy="12" r="1.5" />
                <path d="M7 8h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
              </svg>
            </div>
          </div>
          <div class="flex-1">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Natural Genetic Variation.</h2>
            <p class="text-gray-700 leading-relaxed">
              We use germline genetic variation as well as somatic mutations to identify genetic
              variants associated with changes in chromatin and gene expression. To identify these
              associations, we map molecular quantitative trait loci (QTLs) and analyze allele
              specific expression.
            </p>
          </div>
        </div>

        <!-- Genome Perturbations -->
        <div class="flex items-start gap-6">
          <div class="shrink-0">
            <div class="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center">
              <svg class="w-16 h-16 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </div>
          </div>
          <div class="flex-1">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Genome Perturbations.</h2>
            <p class="text-gray-700 leading-relaxed">
              We use CRISPR technologies and reporter assays to perturb the genome and determine how
              sequences affect chromatin and gene expression.
            </p>
          </div>
        </div>

        <!-- Computational Analysis -->
        <div class="flex items-start gap-6">
          <div class="shrink-0">
            <div class="w-32 h-32 rounded-full bg-red-200 flex items-center justify-center">
              <svg class="w-16 h-16 text-red-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
                <path
                  d="M7 7h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 15h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"
                />
              </svg>
            </div>
          </div>
          <div class="flex-1">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Computational Analysis.</h2>
            <p class="text-gray-700 leading-relaxed">
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
