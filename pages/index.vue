<template>
  <div
    class="lg:mt-24 mt-28 mx-auto max-w-6xl flex gap-x-4 lg:flex-row flex-col h-full"
  >
    <div class="lg:w-1/2 w-full flex lg:flex-col flex-col gap-y-4">
      <div class="w-full">
        <div class="lg:mb-8 mb-2 text-gray-500/50">
          <span class="border border-gray-200 rounded-xl px-3 text-gray-300">
            Get it done with
          </span>
        </div>
        <h1 class="lg:text-7xl md:text-3xl text-3xl tracking-tight">
          Gilles Kagarama
        </h1>
        <div class="text-2xl font-light text-gray-500/80">Frontend Software Engineer</div>
      </div>
      <div class="lg:grow w-full relative">
        <h1
          class="lg:absolute bottom-0 left-0 lg:text-5xl md:text-5xl text-3xl lg:leading-tight leading-10"
        >
          I'm in the quest of balancing the user and business needs, I strive to
          design thoughtful experience & engaging digital products.
        </h1>
      </div>
    </div>
    <div class="lg:w-1/2 w-full">
      <div class="relative md:mt-12 sm:mt-12 bg-gray-900/50">
        <img
          src="~/assets/images/gk-profile.png"
          alt="GK"
          class="mx-auto inset-0 z-10 object-cover grayscale"
        />
        <!-- <img
          src="~/assets/images/blob.png"
          alt="GK"
          width="650"
          class="absolute left-0 right-0 mx-auto top-16 inset-0 -z-10 object-cover"
        /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  layout: 'main',
  name: 'Index',
}
</script>
