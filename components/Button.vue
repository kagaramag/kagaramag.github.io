<script setup lang="ts">
defineProps<{
  link?: string
  label?: string
  type: 'button' | 'link'
  internal?: boolean
  classes?: string
}>()
</script>
<template>
  <a
    v-if="type === 'link' && !internal"
    :href="link"
    target="_blank"
    class="inline bg-secondary px-4 py-2.5 text-dark rounded"
    :class="classes"
  >
    <slot />
  </a>
  <NuxtLink
    v-else-if="type === 'link' && internal"
    :to="link"
    class="inline bg-secondary px-4 py-2.5 text-dark rounded"
    :class="classes"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    class="inline bg-secondary px-4 py-2.5 text-dark rounded"
    :class="classes"
  >
    <slot />
  </button>
</template>
