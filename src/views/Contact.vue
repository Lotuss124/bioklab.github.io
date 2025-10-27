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

          <!-- Map Image -->
          <div class="p-6">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
              alt="Salk Institute Location Map"
              class="w-full h-auto border border-gray-300"
            />
            <p class="text-xs text-gray-600 mt-4 text-center">
              10010 North Torrey Pines Road, La Jolla, CA 92037
            </p>
          </div>

          <!-- Map Link -->
          <div class="px-6 pb-6">
            <a
              href="https://maps.google.com/?q=Salk+Institute+for+Biological+Studies,La+Jolla,CA"
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
