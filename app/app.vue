<template>
  <UApp>
    <AppHeader/>
    <main class='mx-auto px-4 w-full max-w-7.5xl min-h-screen py-10'>
      <NuxtPage/>
    </main>

    <UModal v-model:open='dialogStore.isAddSnippetOpen' :dismissible='false'>
      <template #content>
        <DialogsAddNewSnippet/>
      </template>
    </UModal>
  </UApp>
</template>

<script setup>
  const dialogStore = useDialogStore()
</script>
