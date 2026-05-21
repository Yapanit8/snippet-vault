<template>
  <div class='flex flex-wrap gap-8'>
    <UCard 
      variant="solid" 
      class="w-full group lg:w-md hover:shadow-md transition-shadow duration-250" 
      :ui="{
        root: 'border-2 border-gray-200 rounded-xl',
        body: 'sm:py-2 px-6'
      }"
    >
      <template #header>
        <div class='flex justify-between'>
          <div>
            <div class="mb-2">
              <UBadge variant='soft'>Typescript</UBadge>
            </div>
            <div>
              <span class='text-xl font-bold'>Main Title</span>
            </div>
          </div>
          <div class='opacity-0 group-hover:opacity-100 transition-opacity'>
            <UButton
              icon="i-heroicons-document-duplicate-20-solid"
              variant="ghost"
            />
            <UButton
              icon='i-mdi-delete'
              variant='ghost'
            />
          </div>
        </div>
      </template>
      <div class="bg-slate-900 rounded-lg p-4 mb-4 text-xs overflow-x-auto border border-slate-800">
        <pre><code><span class='text-white'>test</span></code></pre>
      </div>
      <UBadge variant='soft' class='bg-gray-200 text-gray-500'>
        #database
      </UBadge>
      <template #footer>
        <p class='text-[0.7rem]'>Added 2 hours ago</p>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>