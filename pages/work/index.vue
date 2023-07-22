<template>
  <div class="">
    <div
      class="lg:my-24 my-12 mx-auto max-w-6xl flex gap-x-4 lg:flex-row flex-col h-full"
    >
      <div class="w-full flex lg:flex-col flex-col gap-y-4">
        <div class="text-gray-500/50">
          <span class="border border-gray-200 rounded-xl px-3 text-gray-300">
            Projects
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
            <div class="mt-6">
              <a
                :href="project.link"
                target="_blank"
                class="flex flex-row gap-4"
              >
                <span class="text-lg font-weight"> Visit </span>
                <img
                  width="32"
                  src="~assets/images/arrow-right.svg"
                  :alt="project.name"
              /></a>
            </div>
          </div>
        </div>
        <div
          class="max-w-5xl mx-auto mt-6 pt-12 px-12 bg-[#343434]/70 backdrop-blur-md rounded-t-3xl relative"
        >
          <svg
            viewBox="0 0 1024 1024"
            class="absolute left-1/2 -top-36 -z-20 h-[56rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
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
          <!-- <div
            class="absolute inset-x-0 bottom-56 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#E01B22] to-[#E01B22] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div> -->
          <img :src="renderImage(project.image)" :alt="project.name" />
        </div>
      </div>
      <hr class="h-px mb-24 bg-gray-400/20 border-0" />
    </div>

    <!-- NEED ACCESS? -->
    <div class="relative isolate bg-[#121212]" v-if="authed === false">
      <div class="max-w-5xl mx-auto">
        <div
          class="mx-auto flex max-w-2xl flex-col gap-16 py-12 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-6 xl:gap-x-0 xl:px-0"
        >
          <img
            class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            src="~assets/images/protected.png"
            alt="protected"
          />
          <div class="w-full flex-auto px-12">
            <h2 class="text-6xl font-bold tracking-tight text-white">
              Access<br />
              Protected Projects
            </h2>
            <p class="mt-6 text-lg leading-7 text-white">
              The best stuff is in here. Use password provided via email or
              contact me.
            </p>

            <div class="mt-10 flex">
              <button
                @click="openModal"
                class="text-sm font-semibold leading-6 text-indigo-400 bg-[#343434] border border-gray-300 px-5 py-2.5 text-sm rounded-md text-gray-300"
              >
                Enter <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <!-- <div
            class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            />
          </div> -->
      </div>
    </div>
    <div v-if="authed === true">
      <div v-for="(project, index) in projects" :key="index">
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
              <div class="mt-6">
                <a
                  :href="project.link"
                  target="_blank"
                  class="flex flex-row gap-4"
                >
                  <span class="text-lg font-weight"> Visit </span>
                  <img
                    width="32"
                    src="~assets/images/arrow-right.svg"
                    :alt="project.name"
                /></a>
              </div>
            </div>
          </div>
          <div
            class="max-w-5xl mx-auto mt-6 pt-12 px-12 bg-[#343434]/70 backdrop-blur-md rounded-t-3xl relative"
          >
            <svg
              viewBox="0 0 1024 1024"
              class="absolute left-1/2 -top-36 -z-20 h-[56rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
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
            <img :src="renderImage(project.image)" :alt="project.name" />
          </div>
        </div>
        <hr class="h-px mb-24 bg-gray-400/20 border-0" />
      </div>
    </div>
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      v-if="modal === true && authed === false"
    >
      <div class="fixed inset-0 bg-dark top-0 z-60"></div>
      <div class="fixed inset-0 z-70 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
        <div
        class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
        >
        <button class="absolute top-6 right-6">
          <img width="32" src="~assets/images/close.svg" />
        </button>
            <div>
              <div
                class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary"
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
                  class="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  To access this section, enter PIN
                </h3>
                <div class="mt-6 mb-2">
                  <input
                    type="number"
                    name="pin"
                    id="pin"
                    v-model="pin"
                    class="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="eg: 1234567"
                  />
                </div>
              </div>
            </div>
            <div class="text-gray-500">
              {{ message }}
            </div>
            <div class="mt-5 sm:mt-6">
              <button
                @click="checkAuth"
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
  name: 'Index',
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
        },
        {
          name: 'Dacade',
          image: 'project-s-01.jpg',
          logo: 'logo-DACADE.png',
          description: 'Peer to peer learning platfrom',
          link: 'https://dacade.org',
          color: '#E11C22',
          year: '',
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
        },
        {
          name: 'Yes!',
          image: 'project-s-01.jpg',
          logo: 'project-s-01.jpg',
          description: 'Peer to peer learning platfrom',
          link: 'https://yesway.money',
          color: '#E11C22',
          year: '',
        },
      ],
      anything: 'you want',
      pin: '',
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
      // this.modal = true
      this.authed = false
      if (parseInt(this.pin) === 112233) {
        this.$cookies.set('token', Date.now(), {
          path: '/',
          maxAge: 60 * 1 * 1 * 1,
        })
        this.authed = true
        this.modal = false
        document.documentElement.style.overflow = 'auto'
      } else {
        // console.log('476123', this.pin)
        // this.message = 'Sorry, PIN is not matching...'
        document.documentElement.style.overflow = 'hidden'
        this.authed = false
        // this.modal = true
      }
    },
    renderImage(url) {
      return require(`~/assets/images/${url}`)
    },
  },
}
</script>
