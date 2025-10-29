<script setup lang="ts">
import { onMounted } from 'vue'
import PublicationCard from '../components/PublicationCard.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

// 这里的type我只写了三种，预印本、会议、期刊这三种，如还需添加可联系我
interface Publication {
  authors: string
  year: number
  title: string
  journal: string
  type: 'preprint' | 'journal' | 'conference'
  link?: string
  correspondingAuthor?: string // 通讯作者姓名，用于加粗显示
}

interface PublicationSection {
  title: string
  items: Publication[]
}

// 论文，authors代表作者，year代表年份，title代表标题，journal代表期刊，type代表类型，link代表链接（可为空，则显示纯文本）
// correspondingAuthor代表通讯作者姓名（可选），填写后会在作者列表中加粗显示该作者（不区分大小写）
// type为preprint代表预印本，journal代表期刊，conference代表会议
// 例：
// {
//   authors: '作者1, McVicker G#, 作者3',
//   year: 2025,
//   title: '标题1',
//   journal: '期刊1',
//   type: 'preprint',
//   link: '',  // 可为空，则显示纯文本
//   correspondingAuthor: 'McVicker G', // 会将这个作者加粗显示（一般用于主要复制人）
// },

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
        type: 'conference',
        link: '',
        correspondingAuthor: 'McVicker G',
      },
      {
        authors: 'Laub D, Ho A, Jaureguy J, Kile A, Salem RM, McVicker G#, Carriere',
        year: 2025,
        title:
          'GenVarLoader: An accelerated dataloader for applying deep learning to personalized genomics',
        journal: 'bioRxiv',
        type: 'preprint',
        link: '#',
        correspondingAuthor: 'McVicker G',
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

const { fadeInUp, fadeIn, staggerFadeInUp } = useScrollAnimation()

onMounted(() => {
  fadeInUp('.animate-title')
  fadeInUp('.animate-section')
  staggerFadeInUp('.animate-card')
})
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="animate-title text-4xl font-light text-gray-800 mb-12">Publications</h1>

    <!-- 论文 -->
    <div class="space-y-16">
      <section
        class="animate-section"
        v-for="(section, sectionIndex) in sections"
        :key="sectionIndex"
      >
        <!-- 标题 -->
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-3xl font-semibold text-gray-800">{{ section.title }}</h2>
          <div class="flex-1 h-px bg-gray-300"></div>
          <span class="text-sm text-gray-500">{{ section.items.length }} items</span>
        </div>

        <!-- 论文卡片 -->
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
