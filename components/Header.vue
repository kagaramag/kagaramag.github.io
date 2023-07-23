<script>
export default {
  data() {
    return {
      topY: 0,
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  created() {},
  methods: {
    handleScroll() {
      this.topY = window.scrollY
    },
  },
}
</script>
<template>
  <div class="relative z-10">
    <header
      class="fixed w-full top-0 z-80"
      :class="{ 'bg-[#343434]': topY > 200 }"
    >
      <nav
        class="lg:max-w-6xl w-full mx-auto flex items-center justify-between"
        aria-label="Global"
      >
        <div class="hidden lg:flex lg:flex-1">
          <ul
            class="tracking-wide lg:text-sm flex-col flex lg:flex-row lg:gap-2 gap-2 lg:gap-0 text-center lg:text-left lg:mt-0 mt-3"
          >
            <li class="lg:mr-4">
              <NuxtLink to="/" class="block lg:py-2.5 py-2"> Home </NuxtLink>
            </li>
            <li class="lg:mr-4">
              <NuxtLink to="/work" class="block lg:py-2.5 py-2">
                Work
              </NuxtLink>
            </li>
            <li class="lg:mr-4">
              <NuxtLink to="/about" class="block lg:py-2.5 py-2">
                About
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex lg:flex-1 px-4">
          <NuxtLink to="/" class="my-1.5 py-1.5 mx-auto">
            <span class="sr-only">GK</span>
            <img
              width="300"
              height="63"
              class="h-10 w-auto"
              src="~assets/images/logo-light.svg"
              alt="Reach"
            />
          </NuxtLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <ul
            class="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row lg:gap-2 gap-2 lg:gap-0 text-center lg:text-left lg:mt-0 mt-3"
          >
            <li>
              <button
                class="block border border-gray-300/30 px-4 py-2.5 text-sm text-gray-300 rounded"
              >
                Let's talk
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>
