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
      class="fixed w-full top-0 z-30"
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

        <!-- <div class="flex lg:hidden">
          <button
            type="button"
            @click="toggleMenu"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <img
              src="~/assets/images/menu.svg"
              alt="Menu"
              width="32"
              height="32"
              v-if="!menu"
            />
            <img
              src="~/assets/images/close.svg"
              alt="Menu"
              width="32"
              height="32"
              v-if="menu"
            />
          </button>
        </div> -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <ul
            class="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row lg:gap-2 gap-2 lg:gap-0 text-center lg:text-left lg:mt-0 mt-3"
          >
            <li>
              <button
                class="block border border-gray-300 px-4 py-2.5 text-sm rounded-md text-gray-300"
              >
                Let's talk
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- <div
      class="absolute flex fixed top-0 left-0 bg-secondary w-screen h-screen insert-0 z-30 justify-center items-center"
    >
      <ul
        class="w-64 m-auto tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row lg:gap-6 gap-2 lg:gap-0 text-center lg:text-left lg:mt-0"
      >
        <li class="lg:mr-4">
          <NuxtLink to="/" class="block md:px-4 lg:py-2.5 py-2">
            Home
          </NuxtLink>
        </li>
        <li class="lg:mr-4">
          <NuxtLink to="/blog" class="block md:px-4 lg:py-2.5 py-2">
            Blog
          </NuxtLink>
        </li>
        <li class="lg:mr-4">
          <NuxtLink
            to="/waitlist"
            class="block md:px-4 lg:py-2.5 py-2"
          >
            Join waitlist
          </NuxtLink>
        </li>
      </ul>
    </div> -->
  </div>
</template>
