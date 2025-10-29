<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PersonCard from '../components/PersonCard.vue'
import PersonModal from '../components/PersonModal.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

// 这是一个图片引入示例
import avatar from '@avatar/avatar.jpg'


// 这是人物卡片下的链接，一个type代表链接类型，url代表链接地址，label代表链接标签
// 我这里写了三种链接，type为cv代表简历，scholar代表学术认证，email代表邮箱，如果需要添加可以联系我
// url为空时显示为普通文本，不可点击
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

interface TeamSection {
  title: string
  members: Person[]
}

const selectedPerson = ref<Person | null>(null)
const isModalOpen = ref(false)

const openPersonModal = (person: Person) => {
  selectedPerson.value = person
  isModalOpen.value = true
}

const closePersonModal = () => {
  isModalOpen.value = false
  // 等待动画结束
  setTimeout(() => {
    selectedPerson.value = null
  }, 300)
}

// 团队，一个title代表一个团队，members代表团队成员，name代表姓名，role代表角色，image代表图片，bio代表简介，links代表链接（只有三种，具体看上面）
// links为空代表不加链接，如：{ name: '成员1', role: '角色1', image: '图片1', bio: '简介1' }
// 例：
// {
//   title: '团队1',
//   members: [
//     { name: '成员1', role: '角色1', image: '图片1', bio: '简介1', links: [{ type: '链接类型', url: '链接地址', label: '链接标签' }] },
//   ],
// },

const team: TeamSection[] = [
  {
    title: 'Principal Investigator',
    members: [
      {
        name: 'Graham McVicker',
        role: 'Principal Investigator',
        // 使用引入的图片
        image: avatar,
        bio: 'Graham received his B.Sc. in Computer Science from the University of British Columbia and subsequently worked on the Ensembl Genome Browser at the European Bioinformatics Institute. Graham then did his Ph.D. with Phil Green at the University of Washington where he studied how mutation and selection shape human genetic variation. In his postdoctoral research with Jonathan Pritchard at the University of Chicago and Stanford University, Graham researched how human genetic variation affects chromatin state. Since 2016, Graham has been a PI in the Laboratory of Genetics and the Integrative Biology Laboratory at the Salk Institute.',
        links: [
          { type: 'cv', url: '#', label: 'CV' },
          { type: 'scholar', url: '#', label: 'Google Scholar' },
          { type: 'email', url: 'mailto:gmcvicker@salk.edu', label: 'gmcvicker@salk.edu' },
        ],
      },
    ],
  },
  {
    title: 'Postdoctoral Scholars',
    members: [
      {
        name: 'Shanna Lavalle',
        role: 'Postdoctoral Scholar',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        bio: "Shanna Lavalle received her undergraduate degree from California State University, Long Beach, where she majored in Biology-Physiology with a minor in Chemistry. She completed her Ph.D. at the University of California, San Diego, in Dr. Pamela Mellon's lab. In her thesis she studied how the Kiss1 neuroendocrine gene is regulated by the homeodomain transcription factors SIX3 and VAX1 to influence reproduction.",
        links: [{ type: 'email', url: 'mailto:slavalle@salk.edu', label: 'slavalle@salk.edu' }],
      },
      {
        name: 'Brad Balderson',
        role: 'Postdoctoral Scholar',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        bio: 'Brad received his undergraduate degree with a dual major in Bioinformatics at the University of Queensland (UQ), Australia. Brad completed his PhD in 2023 within the labs of Prof. Stefan Thor and A/Prof. Mikael Boden (UQ), where he designed novel computational methods to statistically determine distinct populations of cells in single cell transcriptomics data. For his postdoc in the McVicker lab, Brad is collaborating with the Palmer and Telese labs and developing machine learning methods to analyze single cell and genetic data in an outbred rat model of opioid addiction.',
        links: [{ type: 'email', url: 'mailto:bbalderson@salk.edu', label: 'bbalderson@salk.edu' }],
      },
    ],
  },
  {
    title: 'Staff Scientists',
    members: [
      {
        name: 'Mickey Lorenzini',
        role: 'Staff Scientist',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        bio: 'Mickey defended his Ph.D. in April 2025 and has continued on as a Staff Scientist in the McVicker lab where he is continuing to develop the Superb-seq technology and using single-cell approaches to characterize how genome perturbations affect gene expression. Mickey completed his undergraduate degree at the University of Kansas, during which time he worked in bioinformatics and the biochemistry of cell signaling. Mickey then moved to San Diego where he completed his Ph.D. at UC San Diego in the lab of Dr. Gene Yeo.',
        links: [{ type: 'email', url: 'mailto:mlorenzini@salk.edu', label: 'mlorenzini@salk.edu' }],
      },
    ],
  },
]

const { fadeInUp, staggerFadeInUp } = useScrollAnimation()

onMounted(() => {
  fadeInUp('.animate-title')
  fadeInUp('.animate-section-title')
  staggerFadeInUp('.animate-card')
})
</script>

<template>
  <main class="max-w-7xl mx-auto px-6 py-12">
    <h1 class="animate-title text-4xl font-light text-gray-800 mb-12">People</h1>

    <!-- 团队 -->
    <div class="space-y-16">
      <section v-for="(section, sectionIndex) in team" :key="sectionIndex">
        <!-- 标题 -->
        <h2
          class="animate-section-title text-2xl font-semibold text-gray-800 mb-8 border-b-2 border-gray-200 pb-3"
        >
          {{ section.title }}
        </h2>

        <!-- 成员卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="animate-card"
            v-for="(member, memberIndex) in section.members"
            :key="memberIndex"
          >
            <PersonCard :person="member" @click="openPersonModal(member)" />
          </div>
        </div>
      </section>
    </div>

    <!-- 人员详情 -->
    <PersonModal :person="selectedPerson" :is-open="isModalOpen" @close="closePersonModal" />
  </main>
</template>

<style scoped></style>
