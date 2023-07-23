<template>
  <div
    class="lg:my-24 my-28 mx-auto max-w-6xl flex gap-x-4 lg:flex-row flex-col h-full"
  >
    <div class="lg:w-1/2 w-full flex lg:flex-col flex-col gap-y-4">
      <div class="w-full">
        <div class="lg:mb-8 text-gray-500/50">
          <span class="border border-gray-300/30 px-3 py-2 text-gray-300 rounded">
            👋🏽 Get it done with
          </span>
        </div>
        <h1 class="lg:text-7xl md:text-3xl text-3xl tracking-tight -mt-3 mb-2">
          Gilles Kagarama
        </h1>
        <div class="text-2xl font-light text-gray-500/80">
          Frontend Engineer &amp; Product Designer
        </div>
      </div>
      <div class="lg:grow w-full relative">
        <h1
          class="lg:absolute bottom-0 left-0 lg:text-3xl md:text-3xl text-2xl lg:leading-tight leading-10"
        >
          I'm in the quest of balancing the user &amp; business needs, creating
          thoughtful experiences & engaging digital products that drive
          significant ROI. With a passion for frontend engineering, I bring
          designs to life, ensuring seamless user interactions &amp; visually
          captivating interfaces.
        </h1>
      </div>
    </div>
    <div class="lg:w-1/2 w-full">
      <div
        class="relative md:mt-12 sm:mt-12 bg-gray-900/50 border-gray-300/10 border rounded"
      >
        <img
          src="~/assets/images/gk-profile.png"
          alt="GK"
          class="mx-auto inset-0 z-10 object-cover grayscale"
        />
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
