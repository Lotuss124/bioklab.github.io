<script setup lang="ts"></script>

<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-light text-gray-900 mb-12 border-b-2 border-gray-200 pb-4">
      Contact Us
    </h1>

    <p class="text-gray-700 mb-12 text-lg">
      The McVicker lab is located on the first floor of the Salk Institute's North Building.
    </p>

    <!-- Contact Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
      <!-- Left: Contact Information -->
      <div class="lg:col-span-2 space-y-10">
        <!-- Address -->
        <div class="border-l-4 border-gray-800 pl-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wide">Address</h2>
          <address class="not-italic text-gray-700 leading-relaxed space-y-1">
            <p class="font-semibold text-gray-900">McVicker Lab</p>
            <p>Salk Institute for Biological Studies</p>
            <p>10010 N Torrey Pines Rd</p>
            <p>La Jolla, CA 92037</p>
          </address>
        </div>

        <!-- Email -->
        <div class="border-l-4 border-gray-800 pl-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wide">Email</h2>
          <a
            href="mailto:gmcvicker@salk.edu"
            class="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-900 transition-colors"
          >
            gmcvicker@salk.edu
          </a>
        </div>

        <!-- Phone -->
        <div class="border-l-4 border-gray-800 pl-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wide">Phone</h2>
          <p class="text-gray-700">858-453-4100</p>
        </div>
      </div>

      <!-- Right: Map -->
      <div class="lg:col-span-3">
        <div class="bg-gray-50 border border-gray-300 overflow-hidden">
          <!-- Map Header -->
          <div class="bg-gray-800 px-6 py-3 border-b border-gray-700">
            <h2 class="text-sm font-semibold text-white uppercase tracking-wider">
              Entrance & Parking Map
            </h2>
          </div>

          <!-- Map Embed -->
          <div class="p-6">
            <div class="relative w-full" style="padding-bottom: 75%">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8147206894323!2d113.96587147609534!3d22.58603197948214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f26280c42af7%3A0x8d21a53a479fa4ca!2sHarbin%20Institute%20of%20Technology%20Shenzhen%20Graduate%20School%20%EF%BC%88Southwest%20Gate%EF%BC%89!5e0!3m2!1sen!2shk!4v1761617224543!5m2!1sen!2shk"
                class="absolute inset-0 w-full h-full border border-gray-300"
                style="border: 0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p class="text-xs text-gray-600 mt-4 text-center">
              Harbin Institute of Technology Shenzhen Graduate School
            </p>
          </div>

          <!-- Map Link -->
          <div class="px-6 pb-6">
            <a
              href="https://www.google.com/maps/search/harbin+institute+of+technology+shenzhen/@22.5855962,113.9669721,16.5z?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-6 py-2.5 bg-gray-800 text-white text-sm font-medium hover:bg-gray-900 transition-colors uppercase tracking-wide"
            >
              View in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
