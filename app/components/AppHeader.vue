<template>
  <div>
    <header class="h-16 flex justify-center border-b bg-white">
      <div class="flex justify-between items-center px-4 w-full max-w-7.5xl">
        <div class="flex gap-2 items-center">
          <div class="bg-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
            <UIcon name="i-heroicons-code-bracket" class="w-6 h-6 text-white" />
          </div>
          <h1 class="text-xl font-bold text-slate-900 tracking-tight">SnippetVault</h1>
        </div>
        
        <div class='flex items-center gap-3'>
          <UInput class='w-50 md:w-full'  icon="i-lucide-search" placeholder='Search snippets...' input-class="text-black"/>
          <UButton icon="i-lucide-plus" class='text-white'>
            <span class='hidden whitespace-nowrap md:block'>New Snippet</span>
          </UButton>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>