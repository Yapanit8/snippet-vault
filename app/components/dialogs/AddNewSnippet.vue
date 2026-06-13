<template>
  <UCard
    title="Add New Snippet"
    class="w-full bg-gray-100"
    :ui="{
      header: 'border-b-0',
      body: 'border-y border-gray-400 bg-white',
    }"
  >
    <UForm>
      <UFormField
        label="Snippet Title"
        :ui="{ label: 'text-black' }"
      >
        <UInput
          v-model="newSnippetDetails.title"
          class="w-full"
        ></UInput>
      </UFormField>
      <UFormField
        label="Stack Used"
        :ui="{ label: 'text-black' }"
      >
        <USelectMenu
          v-model="newSnippetDetails.stack"
          :items="stackItems"
          :ui="{ item: 'text-black' }"
          create-item
          multiple
          class="w-full"
          @create="
            (val) =>
              handleSelectMenuCreate(
                val,
                stackItems,
                newSnippetDetails,
                'stack',
              )
          "
        />
      </UFormField>
      <UFormField
        label="Code Snippet"
        :ui="{ label: 'text-black' }"
      >
        <UTextarea
          v-model="newSnippetDetails.code"
          placeholder="// Paste your code here..."
          class="w-full"
          :ui="{
            base: 'bg-slate-900 rounded-lg p-4 mb-4 text-xs overflow-x-auto border text-white',
          }"
        ></UTextarea>
      </UFormField>
      <UFormField
        label="Hashtags"
        :ui="{ label: 'text-black' }"
      >
        <USelectMenu
          v-model="newSnippetDetails.hashtags"
          :items="hashtagItems"
          :ui="{ item: 'text-black' }"
          create-item
          multiple
          class="w-full"
          @create="
            (val) =>
              handleSelectMenuCreate(
                val,
                hashtagItems,
                newSnippetDetails,
                'hashtags',
              )
          "
        />
      </UFormField>
    </UForm>

    <template #footer>
      <div class="flex justify-end gap-2">
        <UButton
          label="Cancel"
          variant="outline"
          @click="dialogStore.closeAddSnippet()"
        />
        <UButton
          label="Save"
          class="text-white"
          @click="handleAddNewSnippet()"
        />
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { Snippet } from "~/types";

const dialogStore = useDialogStore();
const snippetStore = useSnippetStore()

const stackItems = ref(["Typescript", "SQL"]);
const hashtagItems = ref([] as string[]);

const newSnippetDetails = ref<Snippet>({
  title: "",
  code: "",
  stack: [],
  hashtags: [],
  createdDate: ""
});

const handleSelectMenuCreate = (
  newValue: string,
  optionsArray: string[],
  targetObject: any,
  key: string,
) => {
  optionsArray.push(newValue);
  targetObject[key] = [...(targetObject[key] ?? []), newValue];
};

const handleAddNewSnippet = () => {

  if(!newSnippetDetails.value.title.trim()){
    alert("Snippet title is required!")
    return
  }

  snippetStore.addSnippet(newSnippetDetails.value)
};
</script>

<style scoped></style>
