<template>
  <div>
    <div
      class="lg:mt-12 mt-12 mx-auto max-w-6xl flex gap-x-4 lg:flex-row flex-col h-full"
    >
      <div class="w-full py-12">
        <!-- <div class="lg:text-4xl md:text-3xl text-3xl tracking-tight mb-3">
          Hello, I'm
        </div> -->
        <div class="text-gray-500/50">
          <span class="border border-gray-200 rounded-xl px-3 text-gray-300">
            Hello, I'm
          </span>
        </div>
        <h1 class="lg:text-7xl md:text-3xl text-3xl tracking-tight mb-3">
          Gilles Kagarama,
        </h1>
        <h1
          class="lg:text-3xl md:text-3xl text-3xl tracking-tight text-gray-500/80"
        >
          A UX/UI Designer!
        </h1>
      </div>
    </div>

    <hr class="h-px my-24 bg-gray-400/20 border-0" />
    <div class="lg:mt-24 mt-32 mx-auto max-w-6xl">
      <div class="flex gap-x-4 lg:flex-row flex-col h-full">
        <div class="w-1/4 text-3xl font-light text-gray-500/80">
          A little about me
        </div>
        <div class="w-3/4">
          <p class="text-3xl leading-9 tracking-tight font-light mb-4">
            I have 11+ years’ experiences in creating and executing innovative
            software solutions to enhance business productivity. I lead the
            design of engaging & intuitive applications.
          </p>
          <p class="text-3xl leading-9 tracking-tight font-light mb-4">
            Growing from the root of digital magazines, music streaming
            platforms, & startups as Full Stack Software Engineer has shaped me
            to easily identify user needs and their pain points.
          </p>
          <p class="text-3xl leading-9 tracking-tight font-light mb-4">
            I’m passionate about crafting beautiful and delightful user
            experiences that deeply resonate with users, exemplify brand
            identity and ultimately contribute to the user's trust and their
            relationship with products.
          </p>
        </div>
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
