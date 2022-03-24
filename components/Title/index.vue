<template></template>

<template>
  <div class="position-relative" style="z-index: 2">
    <h1 v-if="heading === '1'" :class="classes">
      <slot />
    </h1>
    <h2 v-if="heading === '2'" :class="classes">
      <slot />
    </h2>
    <h3 v-if="heading === '3'" :class="classes">
      <slot />
    </h3>
    <h4 v-if="heading === '4'" :class="classes">
      <slot />
    </h4>
    <h5 v-if="heading === '5'" :class="classes">
      <slot />
    </h5>
    <h6 v-if="heading === '6'" :class="classes">
      <slot />
    </h6>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title", "heading", "classes"],
});
</script>

<style lang="css" scoped>
.h1 {
  font-size: 4.5em !important;
}
</style>
<style module src="./styles.module.scss" lang="scss" />
