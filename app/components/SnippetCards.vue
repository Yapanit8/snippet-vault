<template>
  <div class='flex flex-wrap gap-8'>
    <UCard v-for="snippet in snippetStore.snippetItems" :key='snippet.id'
      variant="solid" class="w-full group lg:w-md hover:shadow-md transition-shadow duration-250" :ui="{
      root: 'border-2 border-gray-200 rounded-xl',
      body: 'sm:py-2 px-6'
    }">
      <template #header>
        <div class='flex justify-between'>
          <div class='flex gap-2 flex-1 flex-wrap'>
            <UBadge v-for="stack in snippet.stack" :key="stack" variant='soft'>
              {{ stack }}
            </UBadge>
          </div>
          <div class='opacity-0 group-hover:opacity-100 transition-opacity'>
            <UButton icon="i-heroicons-document-duplicate-solid" variant="ghost" />
            <UButton icon='i-mdi-trash' variant='ghost' />
          </div>
        </div>
        <div class='mt-4'>
          <span class='text-xl font-bold'>{{ snippet.title }}</span>
        </div>
      </template>
      <div class="bg-slate-900 rounded-lg p-4 mb-6 text-xs overflow-x-auto border border-slate-800">
        <pre><code><span class='text-white'>{{ snippet.code }}</span></code></pre>
      </div>
      <div class='flex gap-2 flex-1 flex-wrap'>
        <UBadge variant='soft' class='bg-gray-200 text-gray-500' v-for="hashtag in snippet.hashtags" :key="hashtag">
          #{{ hashtag }}
        </UBadge>
      </div>
      <template #footer>
        <p class='text-[0.7rem]'>{{ formatDate(snippet.createdDate) }}</p>
      </template>
    </UCard>

    <!-- ADD SNIPPET CARD -->
    <UCard class="w-full group lg:w-md flex justify-center items-center" :ui="{
      root: 'border-3 border-dashed ring-0 hover:border-primary transition-all duration-400'
    }" @click='dialogStore.openAddSnippet()'>
      <div class='flex flex-col gap-5 justify-center items-center'>
        <UButton variant='soft'
          class='rounded-full w-[3rem] h-[4rem] flex justify-center text-gray-400 group-hover:text-primary transition-all duration-400'
          size='xl' icon='i-lucide-plus'/>
        <span class='text-gray-400 font-bold'>Add another snippet</span>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const dialogStore = useDialogStore()
const snippetStore = useSnippetStore()

const formatDate = (date:string) => {
  const uploadedDate = new Date(date)
  const dateToday = new Date()
  const diffByMilliseconds = Math.abs(dateToday.getTime() - uploadedDate.getTime())
  const diffByMinutes = Math.floor(diffByMilliseconds / (1000 * 60));
  const diffByHours = Math.floor(diffByMilliseconds / (1000 * 60 * 60));

  const getPlural = (time:number) => {return time <= 1 ? "" : "s"}

  if(diffByHours > 23){
    return uploadedDate.toDateString()
  }else if(diffByMinutes == 0){
    return "Added just now"
  }else if(diffByMinutes > 0 && diffByMinutes < 60){
    return `Added ${diffByMinutes} minute${getPlural(diffByMinutes)} ago`
  }else{
    return `Added ${diffByHours} hour${getPlural(diffByHours)} ago`
  }

}

</script>

<style scoped></style>