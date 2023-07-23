<template>
  <div class="">
    <div
      class="lg:mt-24 mt-12 mx-auto max-w-6xl flex gap-x-4 lg:flex-row flex-col h-full"
    >
      <div class="w-full flex lg:flex-col flex-col gap-y-4">
        <div class="text-gray-500/50">
          <span
            class="border border-gray-300/30 px-3 py-2 text-gray-300 rounded"
          >
            👨🏽‍💻 Projects
          </span>
        </div>
        <div class="">
          <h1 class="lg:text-7xl md:text-3xl text-3xl tracking-tight">
            Take a look at<br />
            some of the projects I’ve worked on.
          </h1>
        </div>
      </div>
    </div>
    <hr class="h-px my-24 bg-gray-400/20 border-0 border-dashed" />
    <div v-for="(project, index) in featured" :key="index">
      <div class="max-w-5xl mx-auto relative">
        <div class="flex flex-row lg:gap-x-12 z-0">
          <div class="w-1/3">
            <h1
              class="lg:text-5xl md:text-3xl text-3xl tracking-tight flex gap-x-4 items-center"
            >
              <span>
                <img
                  width="64"
                  :src="renderImage(project.logo)"
                  :alt="project.name"
                />
              </span>
              <span>
                {{ project.name }}
              </span>
            </h1>
          </div>
          <div class="w-2/3">
            <div class="text-xl font-light">{{ project.description }}</div>
            <div class="mt-2">
              <span
                v-for="(tag, i) in project.tags"
                :key="i"
                class="bg-gray-500/50 text-gray-200 text-xs font-light mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300 border border-gray-400/70"
              >
                {{ tag }}</span
              >
            </div>
            <div class="mt-6">
              <a
                :href="project.link"
                target="_blank"
                class="flex flex-row gap-4 w-32 border border-gray-300/50 bg-dark/50 px-4 py-2.5 text-sm text-gray-300 rounded"
              >
                <span class="text-sm font-weight"> Visit </span>
                <img
                  width="32"
                  src="~assets/images/arrow-right.svg"
                  :alt="project.name"
                  class="ml-4 opacity-50"
              /></a>
            </div>
          </div>
        </div>
        <div
          class="z-0 max-w-5xl mx-auto mt-6 pt-12 px-12 bg-[#343434]/70 backdrop-blur-md relative"
        >
          <img
            :src="renderImage(project.image)"
            :alt="project.name"
            class="relative z-0"
          />
        </div>

        <div class="absolute bottom-0 w-full h-[44rem] overflow-hidden -z-30">
          <svg
            viewBox="0 0 1024 1024"
            class="relative left-1/2 -bottom-0 h-[56rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
              fill-opacity="0.3"
            />
            <defs>
              <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                <stop stop-color="#E01B22" />
                <stop offset="1" stop-color="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <hr class="h-px mb-24 bg-gray-400/20 border-0" />
    </div>
    <!-- NEED ACCESS? -->
    <div v-if="authed === false" class="relative isolate bg-[#121212]">
      <hr class="h-px bg-gray-400/20 border-0" />
      <div class="max-w-5xl mx-auto">
        <div
          class="mx-auto flex max-w-2xl flex-col gap-16 py-12 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-6 xl:gap-x-0 xl:px-0"
        >
          <img
            class="h-96 w-full flex-none object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm border border-gray-500/50 rounded"
            src="~assets/images/protected.png"
            alt="protected"
          />
          <div class="w-full flex-auto px-12">
            <h2 class="text-6xl font-bold tracking-tight text-white">
              Access<br />
              Protected Projects
            </h2>
            <p class="mt-6 text-lg leading-7 text-gray-600">
              The best stuff is in here. Use password provided via email or
              contact me.
            </p>

            <div class="mt-10 flex">
              <button
                class="text-sm font-semibold leading-6 text-indigo-400 bg-[#343434] border border-gray-300 px-5 py-2.5 text-sm text-gray-300 rounded"
                @click="openModal"
              >
                Enter <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="authed === true">
      <div v-for="(project, index) in projects" :key="index" class="mt-24">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-row lg:gap-x-12">
            <div class="w-1/3">
              <h1
                class="lg:text-5xl md:text-3xl text-3xl tracking-tight flex gap-x-4 items-center"
              >
                <span>
                  <img
                    width="64"
                    :src="renderImage(project.logo)"
                    :alt="project.name"
                  />
                </span>
                <span>
                  {{ project.name }}
                </span>
              </h1>
            </div>
            <div class="w-2/3">
              <div class="text-xl font-light">{{ project.description }}</div>
              <div class="mt-2">
                <span
                  v-for="(tag, i) in project.tags"
                  :key="i"
                  class="bg-gray-500/50 text-gray-200 text-xs font-light mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300 border border-gray-400/70"
                >
                  {{ tag }}</span
                >
              </div>
              <div class="mt-6">
                <a
                  :href="project.link"
                  target="_blank"
                  class="flex flex-row gap-4 w-32 border border-gray-300/50 bg-dark/50 px-4 py-2.5 text-sm text-gray-300 rounded"
                >
                  <span class="text-sm font-weight"> Visit </span>
                  <img
                    width="32"
                    src="~assets/images/arrow-right.svg"
                    :alt="project.name"
                    class="ml-4 opacity-50"
                /></a>
              </div>
            </div>
          </div>
          <div
            class="z-0 max-w-5xl mx-auto mt-6 pt-12 px-12 bg-[#343434]/70 backdrop-blur-md relative"
          >
            <img
              :src="renderImage(project.image)"
              :alt="project.name"
              class="relative z-0"
            />
          </div>
        </div>
        <hr class="h-px bg-gray-400/20 border-0" />
      </div>
    </div>
    <div
      v-if="modal === true && authed === false"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-dark top-0 z-60"></div>
      <div class="fixed inset-0 z-70 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 rounded"
          >
            <button class="absolute top-6 right-6" @click="openModal">
              <img width="32" src="~assets/images/close.svg" />
            </button>
            <div>
              <div
                class="mx-auto flex h-12 w-12 items-center justify-center bg-primary rounded"
              >
                <svg
                  class="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div class="mt-3 sm:mt-5">
                <h3
                  id="modal-title"
                  class="text-base font-semibold leading-6 text-gray-900"
                >
                  To access this section, enter PIN
                </h3>
                <div class="mt-6 mb-2">
                  <input
                    id="pin"
                    v-model="pin"
                    type="number"
                    class="block w-full border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="eg: 1234567"
                    name="pin"
                  />
                </div>
              </div>
            </div>
            <div class="text-gray-500">
              {{ message }}
            </div>
            <div class="mt-5 sm:mt-6">
              <button
                type="button"
                class="inline-flex w-full justify-center bg-primary px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded"
                @click="checkAuth"
              >
                Access now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
  name: 'Work',
  data() {
    return {
      featured: [
        {
          name: 'M2U Money',
          image: 'project-04-M2U.png',
          logo: 'logo-M2U.png',
          description:
            'A mobile money solution by the United Bank for Africa (UBA) in Partnership with Ossix Technologies, LLC. It is an e-wallet and financial service solution accessible mainly on web and mobile technologies. It allows users to carry out various transactions, including money transfers, bulk payments, utility bill payments, merchant payments, international transfers, and microloans. It is positioned as a secured, rapid, and innovative money transfer solution that aims to penetrate both urban and rural areas across Africa.',
          link: 'https://app.m2u.money',
          color: '#E11C22',
          year: '',
          tags: ['UX/UI', 'Graphic Design', 'Javascript/TS', 'React', 'NodeJS'],
        },
      ],
      projects: [
        {
          name: 'SympliFi',
          image: 'project-04-SYMPLIFI.png',
          logo: 'logo-SYMPLIFI.png',
          description:
            'An Africa DeFi Alliance project that provides transformative, decentralized financial solutions for MSMEs in Africa, and to be the de facto home of DeFi applications serving real-world use cases across the continent',
          link: 'https://dev.dashboard.symplifi.co/dashboard',
          color: '#E11C22',
          year: '',
          tags: ['Web3', 'Liquidity Pool'],
        },
        {
          name: 'Dacade',
          image: 'project-04-dacade.png',
          logo: 'logo-DACADE.png',
          description: 'Peer to peer learning platfrom',
          link: 'https://dacade.org',
          color: '#E11C22',
          year: '',
          tags: [
            'UI/UX',
            'Web3',
            'Design Tokens',
            'Solidity',
            'Moralis',
            'React',
          ],
        },
        {
          name: 'Pindo',
          image: 'project-04-PINDO.png',
          logo: 'logo-PINDO.png',
          description:
            'An instant communication platform that  helps businesses engage directly with their customer through various channels such as SMS, Social Media platforms (Whatsapp, Telegram, Facebook Messenger), and Voice.',
          link: 'https://pindo.io',
          color: '#E11C22',
          year: '',
          tags: ['UI/UX', 'UX Research', 'Design System'],
        },
        // {
        //   name: 'Yes!',
        //   image: 'project-s-01.jpg',
        //   logo: 'project-s-01.jpg',
        //   description: 'Peer to peer learning platfrom',
        //   link: 'https://yesway.money',
        //   color: '#E11C22',
        //   year: '',
        // },
      ],
      anything: 'you want',
      pin: '',
      age: '',
      message: '',
      modal: false,
      authed: false,
    }
  },
  created() {
    this.authed = this.$cookies.get('token') ? true : false
  },
  mounted() {},

  methods: {
    openModal() {
      if (this.modal === false) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
      this.modal = !this.modal
    },
    checkAuth() {
      this.authed = false
      if (parseInt(this.pin) === parseInt(process.env.pin)) {
        this.$cookies.set('token', Date.now(), {
          path: '/',
          maxAge: process.env.age || 86400, // 60 * 60 * 1 * 1,
        })
        this.authed = true
        this.modal = false
        document.documentElement.style.overflow = 'auto'
      } else {
        document.documentElement.style.overflow = 'hidden'
        this.authed = false
      }
    },
    renderImage(url) {
      return require(`~/assets/images/${url}`)
    },
  },
}
</script>
