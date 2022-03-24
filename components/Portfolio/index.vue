<template>
  <section class="wrap-eye-ball">
    <div class="container">
      <div class="row l-flex h-100">
        <div class="l-sm-12 l-md-12 l-lg-7 l-flex align-items-center">
          <div class="animate-hero-content">
            <Title heading="1">
              Hello! I'm
              <span class="text-primary-gradient">Gilles Kagarama</span><br />
              a Product Designer &amp; Full Stuck Software Engineer.
            </Title>
            <div class="h3 lead">
              I have 10+ years’ background in creating and executing innovative
              software solutions to enhance business productivity.<br />
              I lead the design of engaging &amp; intuitive digital products and
              crafting amazing User Experiences.
            </div>
            <div class="py-lg">
              <a
                href="mailto:kagaramag@gmail.com"
                target="_blank"
                class="button outline"
                >Let's Chat</a
              >
            </div>
          </div>
        </div>
        <div
          class="
            l-sm-12 l-md-12 l-lg-5 l-flex
            align-items-center
            position-relative
          "
        >
          <div :class="`${$style.ProfilePicWrapper}`">
            <div :class="`${$style.Picture} anim-profile-picture`">
              <img
                src="@/assets/images/profile.png"
                alt="Gilles Kagarama"
                width="400"
              />
            </div>
            <div :class="`${$style.One} anim-profile-shape-one`" />
            <div :class="`${$style.Two} anim-profile-shape-two`" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Portfolio extends Vue {
  x: any = 0
  y: any = 0
  $gsap: any

  onMouseMove(ev: any) {
    this.$gsap.to('.anim-profile-shape-one', 0.6, {
      rotationY: ev.clientY / 100 - 0.5,
      rotationX: ev.clientX / 100 - 0.5,
      transformPerspective: 900,
      transformOrigin: 'center',
    })
    this.$gsap.to('.anim-profile-shape-two', 1.4, {
      rotationY: ev.clientY / 100 - 0.2,
      rotationX: ev.clientX / 100 - 0.2,
      transformPerspective: 900,
      transformOrigin: 'center',
    })
    this.$gsap.to('.anim-profile-picture', 0.2, {
      rotationY: ev.clientY / 50 - 0.9,
      rotationX: ev.clientX / 50 - 0.9,
      transformPerspective: 700,
      transformOrigin: 'center',
    })
  }
  mounted() {
    document.addEventListener('mousemove', this.onMouseMove)
  }
}
</script>
<style module src="./styles.module.scss" lang="scss" />