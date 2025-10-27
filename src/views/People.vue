<script setup lang="ts">
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
          <div
            v-for="(member, memberIndex) in section.members"
            :key="memberIndex"
            class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            <!-- Card Content -->
            <div class="p-6">
              <!-- Avatar and Basic Info -->
              <div class="flex flex-col items-center text-center mb-4">
                <div class="relative mb-4">
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300"
                  />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-1">
                  {{ member.name }}
                </h3>
                <p class="text-sm font-medium text-blue-600 mb-4">
                  {{ member.role }}
                </p>
              </div>

              <!-- Bio -->
              <p class="text-sm text-gray-600 leading-relaxed mb-4 text-left line-clamp-6">
                {{ member.bio }}
              </p>

              <!-- Links -->
              <div
                v-if="member.links && member.links.length > 0"
                class="flex flex-wrap gap-2 justify-center pt-4 border-t border-gray-100"
              >
                <a
                  v-for="(link, linkIndex) in member.links"
                  :key="linkIndex"
                  :href="link.url"
                  class="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full transition-colors"
                  :class="{
                    'bg-blue-100 text-blue-700 hover:bg-blue-200': link.type === 'cv',
                    'bg-green-100 text-green-700 hover:bg-green-200': link.type === 'scholar',
                    'bg-gray-100 text-gray-700 hover:bg-gray-200': link.type === 'email',
                  }"
                >
                  <!-- CV Icon -->
                  <svg
                    v-if="link.type === 'cv'"
                    class="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
                    />
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                  <!-- Scholar Icon -->
                  <svg
                    v-else-if="link.type === 'scholar'"
                    class="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                    />
                  </svg>
                  <!-- Email Icon -->
                  <svg
                    v-else-if="link.type === 'email'"
                    class="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>{{ link.label }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
/* Line clamp utility for bio text */
.line-clamp-6 {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
