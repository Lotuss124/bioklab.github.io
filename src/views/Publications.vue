<script setup lang="ts">
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

function formatAuthors(authors: string): string {
  return authors.replace(/McVicker G[#*]?/g, '<strong class="text-gray-900">McVicker G</strong>')
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
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-light text-gray-800 mb-12">Publications</h1>

    <!-- Publication Sections -->
    <div class="space-y-16">
      <section v-for="(section, sectionIndex) in sections" :key="sectionIndex">
        <!-- Section Title -->
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-3xl font-semibold text-gray-800">{{ section.title }}</h2>
          <div class="flex-1 h-px bg-gray-300"></div>
          <span class="text-sm text-gray-500">{{ section.items.length }} items</span>
        </div>

        <!-- Publication Cards -->
        <div class="space-y-6">
          <article
            v-for="(pub, pubIndex) in section.items"
            :key="pubIndex"
            class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100"
          >
            <!-- Year Badge -->
            <div class="flex items-start justify-between mb-3">
              <span
                class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded"
              >
                {{ pub.year }}
              </span>
              <span
                class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full"
                :class="{
                  'bg-amber-100 text-amber-800': pub.type === 'preprint',
                  'bg-blue-100 text-blue-800': pub.type === 'journal',
                }"
              >
                <svg
                  v-if="pub.type === 'preprint'"
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
                {{ pub.type === 'preprint' ? 'Preprint' : 'Journal' }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-lg font-semibold text-gray-900 mb-3 leading-snug">
              <a v-if="pub.link" :href="pub.link" class="hover:text-blue-600 transition-colors">
                {{ pub.title }}
              </a>
              <span v-else>{{ pub.title }}</span>
            </h3>

            <!-- Authors -->
            <p class="text-sm text-gray-600 mb-2 leading-relaxed">
              <span v-html="formatAuthors(pub.authors)"></span>
            </p>

            <!-- Journal -->
            <p class="text-sm italic text-gray-700 font-medium">{{ pub.journal }}</p>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
