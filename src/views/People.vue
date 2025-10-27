<script setup lang="ts">
import PersonCard from '../components/PersonCard.vue'

interface Link {
  type: 'cv' | 'scholar' | 'email'
  url: string
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

const team: TeamSection[] = [
  {
    title: 'Principal Investigator',
    members: [
      {
        name: 'Graham McVicker',
        role: 'Principal Investigator',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
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
</script>

<template>
  <main class="max-w-7xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-light text-gray-800 mb-12">People</h1>

    <!-- Team Sections -->
    <div class="space-y-16">
      <section v-for="(section, sectionIndex) in team" :key="sectionIndex">
        <!-- Section Title -->
        <h2 class="text-2xl font-semibold text-gray-800 mb-8 border-b-2 border-gray-200 pb-3">
          {{ section.title }}
        </h2>

        <!-- Members Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PersonCard
            v-for="(member, memberIndex) in section.members"
            :key="memberIndex"
            :person="member"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
