<script setup lang="ts">
interface NewsItem {
  text: string
  link?: string
}

interface TimelineEntry {
  date: string
  items: NewsItem[]
}

const timeline: TimelineEntry[] = [
  {
    date: 'April 2025',
    items: [{ text: 'Congrats to Dr. Mickey Lorenzini for successfully defending his PhD!' }],
  },
  {
    date: 'February 2025',
    items: [
      {
        text: 'Our collaboratorative paper Multiomic QTL mapping reveals phenotypic complexity of GWAS loci and prioritizes putative causal variants with the Frazer lab (and others) is now published in Cell Genomics! Jeff was a contributing author.',
        link: '#',
      },
    ],
  },
  {
    date: 'January 2025',
    items: [
      {
        text: 'The lab has moved into our newly-renovated space on the 3rd floor of the Salk Institute South Building!',
      },
    ],
  },
  {
    date: 'October 2024',
    items: [
      {
        text: 'Our paper led by Jessica and Karthik Analysis of CRISPR perturbations indicates that enhancers predominantly act multiplicatively is now published in Cell Genomics!',
        link: '#',
      },
      {
        text: 'Graham gave a featured plenary talk at the American Society for Human Genetics Meeting in Denver on Joint profiling of Cas9 edit sites and transcriptomes in single-cells with Superb-seq',
      },
    ],
  },
  {
    date: 'August 2024',
    items: [{ text: 'Congrats to Han for passing his qualifying exam!' }],
  },
  {
    date: 'July 2024',
    items: [
      { text: 'So long Ariana who is leaving to start her PhD at Scripps Research!' },
      { text: 'Congrats to Brad for being awarded a Hewitt Foundation Fellowship!' },
    ],
  },
  {
    date: 'June 2024',
    items: [
      {
        text: 'Welcome back Elise, who has completed her undergrad degree and returned the lab as a Research Assistant!',
      },
    ],
  },
  {
    date: 'April 2024',
    items: [
      {
        text: 'Congrats to Kiki for being selected into the Yale Ciencia Academy Career Development Program',
      },
      {
        text: 'Congrants to Jeff for being awarded an F31 Ruth L. Kirschstein National Research Service Award from NIH/NHGRI',
      },
    ],
  },
  {
    date: 'January 2024',
    items: [
      {
        text: 'Mickey gave a platform presentation on our Superb-seq technology at the Keystone meeting on Single-Cell Biology: Tissue Genomics, Technologies and Disease meeting in Vancouver, BC',
      },
    ],
  },
  {
    date: 'October 2023',
    items: [
      {
        text: 'Welcome to Dr. Brad Balderson who joins the lab as a postdoc after completing his PhD at the University of Queensland',
      },
      {
        text: 'So long and congrats to Jessica Zhou who has started a postdoctoral scholar in the Koo Lab at Cold Spring Harbor.',
        link: '#',
      },
      {
        text: 'Our collaborative paper Single-nucleus genomics in outbred rats with divergent cocaine addiction-like behaviors reveals changes in amygdala GABAergic inhibition is now out in Nature Neuroscience. This paper was lead by Jessica Zhou with contributions from Aaron Ho. It was a close collaboration with the laboratories of Francesca Telese, Abe Palmer and others!',
        link: '#',
      },
    ],
  },
  {
    date: 'August 2023',
    items: [
      { text: 'Congrats to Jeff for passing his Senate Exam!' },
      {
        text: 'So long and congrats to Arko for starting his own lab as assistant Professor in the Department of Genetics at the University of Alabama at Birmingham!',
        link: '#',
      },
    ],
  },
]
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-light text-gray-800 mb-12">News</h1>

    <!-- Timeline Container -->
    <div class="relative">
      <!-- Vertical Line -->
      <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>

      <!-- Timeline Entries -->
      <div class="space-y-10">
        <div v-for="(entry, index) in timeline" :key="index" class="relative pl-10">
          <!-- Timeline Dot -->
          <div
            class="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white"
          ></div>

          <!-- Date Header -->
          <h2 class="text-xl font-semibold text-gray-800 mb-4">
            {{ entry.date }}
          </h2>

          <!-- News Items -->
          <ul class="space-y-3">
            <li
              v-for="(item, itemIndex) in entry.items"
              :key="itemIndex"
              class="text-gray-700 leading-relaxed"
            >
              <span v-if="item.link" class="inline">
                <a :href="item.link" class="text-blue-600 hover:text-blue-800 hover:underline">
                  {{ item.text }}
                </a>
              </span>
              <span v-else>{{ item.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
