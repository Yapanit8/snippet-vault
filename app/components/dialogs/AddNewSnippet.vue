<template>
  <UCard 
    title="Add New Snippet" 
    class="w-full bg-gray-100"
    :ui="{
      header:'border-b-0',
      body:'border-y border-gray-400 bg-white'
    }"
    >
    <UForm>
      <UFormField label='Snippet Title' :ui="{ label: 'text-black' }">
        <UInput class='w-full'></UInput>
      </UFormField>
      <UFormField label='Stack Used' :ui="{ label: 'text-black' }">
        <UInputMenu :items="['Typescript', 'SQL']" class='w-full' :ui="{ item: 'text-black' }" multiple />
      </UFormField>
      <UFormField label='Code Snippet' :ui="{ label: 'text-black' }">
        <UTextarea placeholder='// Paste your code here...' class='w-full' :ui="{base:'bg-slate-900 rounded-lg p-4 mb-4 text-xs overflow-x-auto border text-white'}"></UTextarea>
      </UFormField>
      <UFormField label='Hashtags' :ui="{ label: 'text-black' }">
        <UInputMenu :items='[]' mode="autocomplete" :trailing-icon="false" :content="{ hideWhenEmpty: true }" class='w-full' :ui="{ item: 'text-black' }" multiple />
      </UFormField>
    </UForm>

    <template #footer>
      <div class='flex justify-end gap-2'>
        <UButton
          label='Cancel'
          variant='outline'
        />
        <UButton
          label='Save'
          class='text-white'
        />
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>