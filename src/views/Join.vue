<script setup lang="ts"></script>

<template>
  <main>
    <!-- Hero Image -->
    <div class="w-full">
      <img
        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=400&fit=crop"
        alt="Salk Institute"
        class="w-full h-72 md:h-96 xl:h-128 object-cover"
      />
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- Top Section: Two Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Left: Join Us -->
        <div>
          <h1 class="text-3xl font-semibold text-gray-900 mb-6">Join Us!</h1>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We are an interdisciplinary group of researchers studying the genetics of chromatin
              and gene regulation. We welcome inquiries from individuals from experimental,
              computational, and statistical backgrounds.
            </p>
            <p>
              Our laboratory uses naturally occurring human genetic variation, genome perturbations,
              and computational analysis to determine how genetic variants affect chromatin state
              and gene expression. We are also interested in linking regulatory variation with
              disease risk. In much of our research we develop statistical and computational methods
              so that we can analyze and interpret data from genomics experiments including
              single-cell ATAC-seq, RNA-seq, reporter assays and CRISPR-based genome perturbations.
              If this type of research sounds exciting to you, contact us.
            </p>
          </div>
        </div>

        <!-- Right: About Salk Institute -->
        <div>
          <h2 class="text-3xl font-semibold text-gray-900 mb-6">About the Salk Institute</h2>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <a href="https://www.salk.edu" target="_blank" class="text-blue-600 hover:underline"
                >The Salk Institute</a
              >
              is a great place to work! It was founded in 1960 by
              <a
                href="https://en.wikipedia.org/wiki/Jonas_Salk"
                target="_blank"
                class="text-blue-600 hover:underline"
                >Jonas Salk</a
              >, the developer of the polio vaccine, and was designed by the renowned architect
              <a
                href="https://en.wikipedia.org/wiki/Louis_Kahn"
                target="_blank"
                class="text-blue-600 hover:underline"
                >Louis Kahn</a
              >. Today, the Salk Institute is an architectural landmark and is one of the top
              biological research institutes in the world.
            </p>
            <p>
              The Salk Institute is located in beautiful
              <a
                href="https://en.wikipedia.org/wiki/La_Jolla"
                target="_blank"
                class="text-blue-600 hover:underline"
                >La Jolla</a
              >, a community of
              <a
                href="https://en.wikipedia.org/wiki/San_Diego"
                target="_blank"
                class="text-blue-600 hover:underline"
                >San Diego, California</a
              >. It is close to many other world-class research institutes including the
              <a href="https://ucsd.edu" target="_blank" class="text-blue-600 hover:underline"
                >University of California San Diego</a
              >,
              <a href="https://scripps.edu" target="_blank" class="text-blue-600 hover:underline"
                >Scripps Research</a
              >, the
              <a href="https://lji.org" target="_blank" class="text-blue-600 hover:underline"
                >La Jolla Institute for Immunology</a
              >,
              <a href="https://sbp.edu" target="_blank" class="text-blue-600 hover:underline"
                >Sanford Burnham Prebys</a
              >
              and the
              <a href="https://www.jcvi.org" target="_blank" class="text-blue-600 hover:underline"
                >J. Craig Venter Institute</a
              >. Many biotechnology companies such as
              <a href="https://illumina.com" target="_blank" class="text-blue-600 hover:underline"
                >Illumina</a
              >
              and
              <a href="https://novartis.com" target="_blank" class="text-blue-600 hover:underline"
                >Novartis</a
              >
              are nearby.
            </p>
          </div>
        </div>
      </div>

      <!-- Position Sections -->
      <div class="space-y-12">
        <!-- Graduate Students -->
        <section class="border-l-4 border-gray-800 pl-8 py-4">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Graduate Students</h2>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Graduate students can join the McVicker Lab through training programs at UCSD. We are
              a part of the
              <a
                href="https://bioinformatics.ucsd.edu"
                target="_blank"
                class="text-blue-600 hover:underline"
                >Bioinformatics and Systems Biology</a
              >
              program and are accepting rotation students. Interested students from other programs
              at UCSD, such as
              <a href="https://bms.ucsd.edu" target="_blank" class="text-blue-600 hover:underline"
                >Biomedical Sciences</a
              >
              and
              <a
                href="https://biology.ucsd.edu"
                target="_blank"
                class="text-blue-600 hover:underline"
                >Biological Sciences</a
              >
              are encouraged to contact the lab to discuss the possibility of rotating.
            </p>
          </div>
        </section>

        <!-- Postdocs -->
        <section class="border-l-4 border-gray-800 pl-8 py-4">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Postdocs</h2>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We welcome inquiries from postdoctoral candidates. Individuals should have strong
              quantitative and/or experimental backgrounds. Applicants must have, or expect to
              receive, a Ph.D. in a relevant discipline (Computer Science, Genetics, Statistics,
              Molecular Biology, Immunology, Bioinformatics, etc.).
            </p>
            <p>
              <strong>To apply:</strong> Email Graham (
              <a href="mailto:gmcvicker@salk.edu" class="text-blue-600 hover:underline"
                >gmcvicker@salk.edu</a
              >) with a brief cover letter describing your background and research interests, your
              CV, and contact information for 2-3 references.
            </p>
          </div>
        </section>

        <!-- Other Individuals -->
        <section class="border-l-4 border-gray-800 pl-8 py-4">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Other Individuals</h2>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If you are interested in the lab, but don't see a relevant position listed here,
              please feel free to contact Graham (
              <a href="mailto:gmcvicker@salk.edu" class="text-blue-600 hover:underline"
                >gmcvicker@salk.edu</a
              >) with an inquiry.
            </p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
