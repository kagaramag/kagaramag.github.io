<template>
  <div
    class="lg:my-24 my-24 mx-auto max-w-6xl flex gap-x-4 lg:flex-row flex-col h-full"
  >
    <div class="lg:w-1/2 w-full flex lg:flex-col flex-col gap-y-4">
      <div class="w-full">
        <div class="lg:mb-8 mb-4 text-gray-500/50">
          <span class="bg-gray-200 px-3 py-2 text-dark rounded">
            👋🏽 Get it done with
          </span>
        </div>
        <h1 class="lg:text-6xl md:text-3xl text-3xl tracking-tight mb-2">
          Gilles Kagarama
        </h1>
        <div class="lg:text-2xl text-base font-light">
          Frontend Engineer &amp; Product Designer
        </div>
      </div>
      <div class="lg:grow w-full relative">
        <h2
          class="lg:absolute bottom-0 left-0 lg:text-3xl md:text-3xl text-base lg:leading-tight lg:leading-10"
        >
          I'm in the quest of balancing the user &amp; business needs, creating
          thoughtful experiences & engaging digital products that drive
          significant ROI. With a passion for frontend engineering, I bring
          designs to life, ensuring seamless user interactions &amp; visually
          captivating interfaces.
        </h2>
      </div>
    </div>
    <div class="lg:w-1/2 w-full relative">
      <div
        class="relative md:mt-12 sm:mt-12 bg-gray-900/50 border-gray-300/10 border rounded"
      >
        <img
          src="~/assets/images/gk-profile-bk.jpg"
          alt="GK"
          class="mx-auto inset-0 z-10 object-cover"
        />
      </div>
      <div class="wrap-blob">
        <img
          src="~/assets/images/blob-gradient.png"
          alt="GK"
          class="-z-10 top-0 left-0 right-0 absolute"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  layout: 'main',
  name: 'Home',
}
</script>

<style lang="scss">
.wrap-blob {
  width: 1000px;
}
</style>
