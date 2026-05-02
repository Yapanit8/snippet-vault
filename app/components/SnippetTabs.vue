<template>
  <UApp>
    <div class='flex gap-3'>
      <UBadge 
        class="rounded-full ring-gray-300 text-gray-500 px-5 py-1 bg-white" 
        variant="outline"
        size="lg"
        v-for="tab in snippetTabs"
      >
      {{ tab }}
      </UBadge>
    </div>
  </UApp>
</template>

<script setup lang="ts">
  import type { Tab } from '~/types'

  const snippetTabs = ref<Tab>(['All Snippets', 'TypeScript', 'PostgreSQL', 'Nuxt 4', 'Tailwind'])
</script>

<style scoped>

</style>