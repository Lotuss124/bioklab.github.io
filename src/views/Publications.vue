<script setup lang="ts">
import { onMounted } from 'vue'
import PublicationCard from '../components/PublicationCard.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

interface Publication {
  authors: string
  year: number
  title: string
  journal: string
  type: 'preprint' | 'journal'
  link?: string
}

interface PublicationSection {
  title: string
  items: Publication[]
}

const sections: PublicationSection[] = [
  {
    title: 'Preprints',
    items: [
      {
        authors: 'Lorenzini MH*, Balderson B*, Sajeev K, Ho AJ, McVicker G',
        year: 2025,
        title:
          'Joint single-cell profiling of CRISPR-Cas9 edits and transcriptomes reveals widespread off-target events and their effects on gene expression',
        journal: 'bioRxiv',
        type: 'preprint',
        link: '#',
      },
      {
        authors: 'Laub D, Ho A, Jaureguy J, Kile A, Salem RM, McVicker G#, Carriere',
        year: 2025,
        title:
          'GenVarLoader: An accelerated dataloader for applying deep learning to personalized genomics',
        journal: 'bioRxiv',
        type: 'preprint',
        link: '#',
      },
      {
        authors:
          'Sen A*, Xu Z*, Tyndale ST, Yasis J, Cho CY, Bump R, Chandran S, Lue L, Fu Y, Petersen LK, Shokhniev M, Kuo DJ, McVicker G#, Dixon JR#',
        year: 2024,
        title:
          'Heterogeneity in chromatin structure drives core regulatory pathways in B-cell Acute Lymphoblastic Leukemia',
        journal: 'bioRxiv',
        type: 'preprint',
        link: '#',
      },
    ],
  },
  {
    title: 'Publications',
    items: [
      {
        authors:
          "Arthur TD*, Nguyen JP*, D'Antonio-Chronowska A, Jaureguy J, Silva N, Henson B, iPSCORE Consortium, Panopoulos AD, Izpisua Belmonte JC, D'Antonio M, McVicker G, Frazer KA",
        year: 2025,
        title:
          'Multiomic QTL mapping reveals phenotypic complexity of GWAS loci and prioritizes putative causal variants',
        journal: 'Cell Genomics',
        type: 'journal',
        link: '#',
      },
      {
        authors:
          'Zhou J*, Guruvayurappan K*, Shushan Toneyan, Chen HY, Chen AR, Peter Koo, McVicker G',
        year: 2024,
        title:
          'Analysis of CRISPR perturbations indicates that enhancers predominantly act multiplicatively',
        journal: 'Cell Genomics',
        type: 'journal',
        link: '#',
      },
      {
        authors:
          'Zhou JL, de Guglielmo G, Ho AJ, Kallupi M, Pokhrel N, Li H, Chitre AS, Munro D, Mohammadi P, Carrette LLG, George O, Palmer AA, McVicker G*, Telese F*',
        year: 2023,
        title:
          'Single-nucleus genomics in outbred rats with divergent cocaine addiction-like behaviors reveals changes in amygdala GABAergic inhibition',
        journal: 'Nature Neuroscience',
        type: 'journal',
        link: '#',
      },
      {
        authors:
          "Chen HY*, Lorenzini MH*, Lavalle SN*, Sajeev K, Fonseca A, Fiaux PC, Sen A, Luthra I, Ho AJ, Chen AR, Guruvayurappan K, O'Connor C, McVicker G",
        year: 2023,
        title:
          'Deletion mapping of regulatory elements for GATA3 in T cells reveals a distal enhancer involved in allergic diseases',
        journal: 'American Journal of Human Genetics',
        type: 'journal',
        link: '#',
      },
      {
        authors:
          'Xu Z*, Lee DS*, Chandran S, Le VT, Bump R, Yasis J, Dallarda S, Marcotte S, Clock B, Haghani N, Cho CY, Akdemir K, Tyndale S, Futsreal PA, McVicker G, Wahl GM, Dixon JR',
        year: 2022,
        title: 'Structural variants drive context-dependent oncogene activation in cancer',
        journal: 'Nature',
        type: 'journal',
        link: '#',
      },
      {
        authors:
          'Chen PB, Fiaux PC, Zhang K, Li B, Kubo N, Jiang S, Hu R, Rooholfada E, Wu S, Wang M, Wang W, McVicker G, Mischel P, Ren B',
        year: 2022,
        title:
          'Systematic discovery and functional dissection of enhancers needed for cancer cell fitness and proliferation',
        journal: 'Cell Reports',
        type: 'journal',
        link: '#',
      },
    ],
  },
]

const { fadeInUp, fadeIn } = useScrollAnimation()

onMounted(() => {
  fadeInUp('.animate-title')
  fadeInUp('.animate-section')
  fadeIn('.animate-card')
})
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="animate-title text-4xl font-light text-gray-800 mb-12">Publications</h1>

    <!-- Publication Sections -->
    <div class="space-y-16">
      <section
        class="animate-section"
        v-for="(section, sectionIndex) in sections"
        :key="sectionIndex"
      >
        <!-- Section Title -->
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-3xl font-semibold text-gray-800">{{ section.title }}</h2>
          <div class="flex-1 h-px bg-gray-300"></div>
          <span class="text-sm text-gray-500">{{ section.items.length }} items</span>
        </div>

        <!-- Publication Cards -->
        <div class="space-y-6">
          <div class="animate-card" v-for="(pub, pubIndex) in section.items" :key="pubIndex">
            <PublicationCard :publication="pub" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
