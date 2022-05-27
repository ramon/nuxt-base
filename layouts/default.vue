<template>
  <div class="page">
    <slot name="header"/>
    <slot/>
    <slot name="footer"/>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title?: string) => {
    return title ? `${title} :: My Project` : "My Project"
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
