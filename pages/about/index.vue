<script lang="ts">
export default {
  layout: 'main',
  name: 'About',
  data() {
    return {
      jobs: [
        {
          id: 1,
          year: 2023,
          company: 'Ape Unit',
          location: 'Berlin, Germany',
          title: 'Product Designer',
          type: 'Contract',
        },
        {
          id: 2,
          year: 2022,
          company: 'Pindo.io',
          location: 'Kigali, Rwanda',
          title: 'Product Designer',
          type: 'Contract',
        },
        {
          id: 3,
          year: 2020,
          company: 'Ossix Technologies, LLC',
          location: 'Kigali, Rwanda',
          title: 'Senior Frontend Engineer & Designer',
          type: 'Full-time',
        },
        {
          id: 4,
          year: 2019,
          company: 'Cowsoko',
          location: 'Nairobi, Kenya',
          title: 'Software Engineer',
          type: '',
        },
        {
          id: 4,
          year: 2019,
          company: 'Andela',
          location: 'Kigali, Rwanda',
          title: 'Full Stack Software Engineer',
          type: 'Full-time',
        },
        {
          id: 5,
          year: 2013,
          company: 'Inyarwanda',
          location: 'Kigali, Rwanda',
          title: 'Frontend Engineer',
          type: 'Full-time',
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <div
      class="lg:mt-24 mt-24 mx-auto max-w-6xl flex gap-x-4 lg:flex-row flex-col h-full"
    >
      <div class="w-full flex lg:flex-col flex-col gap-y-4">
        <div class="text-gray-500/50">
          <span class="bg-gray-200 px-3 py-2 text-dark rounded">
            👋🏽 Hello, I'm
          </span>
        </div>
        <div class="">
          <h1 class="lg:text-7xl md:text-3xl text-3xl tracking-tight mb-3">
            Gilles Kagarama
          </h1>
          <h2 class="tracking-tight text-2xl font-light">
            Enthusiastic Frontend Engineer &amp; Product Designer
          </h2>
        </div>
      </div>
    </div>

    <hr class="h-px lg:my-24 my-8 bg-gray-400/20 border-0" />
    <div class="lg:my-16 my-4 mx-auto max-w-6xl space-y-12">
      <div class="flex gap-x-4 lg:flex-row flex-col h-full">
        <div class="lg:w-1/4 w-full">
          <h3 class="text-3xl font-light subtitle-line">
            <span> Professional summary </span>
          </h3>
        </div>
        <div class="lg:w-3/4 w-full">
          <p class="text-2xl leading-9 tracking-tight font-light mb-4">
            I have 11+ years’ experiences in creating and executing innovative
            software solutions to enhance business productivity. I lead the
            design of engaging & intuitive applications.
          </p>
          <p class="text-2xl leading-9 tracking-tight font-light mb-4">
            Growing from the root of digital magazines, music streaming
            platforms, & startups as Software Engineer has shaped me to deliver
            seamless interactions and visually appealing interfaces that drive
            exceptional user satisfaction and contribute to the overall success
            of the digital products.
          </p>
          <p class="text-2xl leading-9 tracking-tight font-light mb-4">
            I work at the intersection of curiosity, reasoning and innovation,
            which guide me to uncover insights, reframe challenges, and craft
            meaningful, beautiful, and forward-thinking solutions.
          </p>
        </div>
      </div>
    </div>
    <hr class="h-px lg:my-24 my-8 bg-gray-400/20 border-0" />
    <div class="lg:my-16 my-4 mx-auto max-w-6xl space-y-12">
      <div class="flex gap-x-4 lg:flex-row flex-col h-full">
        <div class="lg:w-1/4 w-full">
          <h3 class="text-3xl font-light subtitle-line">
            <span> Employment History </span>
          </h3>
        </div>
        <div class="lg:w-3/4 w-full">
          <div class="flow-root lg:pt-0 sm:pt-6">
            <ul role="list" class="lg:-mb-8 space-y-6">
              <li
                v-for="(job, index) in jobs"
                :key="index"
                class="p-4 border-gray-400/20 border rounded"
              >
                <div class="space-y-2">
                  <h3 class="text-xl">
                    {{ job.title }} - {{ job.company }}
                    <span v-if="job.type"> ({{ job.type }}) </span>
                  </h3>
                  <div class="text-gray-600">
                    <span>{{ job.year }}</span> -
                    <span>{{ job.location }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.subtitle-line span {
  position: relative;
  width: 100%;
}
.subtitle-line span::before {
  background-color: var(--secondary-color);
  position: absolute;
  height: 10px;
  bottom: -10px;
  width: 100%;
  content: '';
  z-index: -1;
}
</style>
