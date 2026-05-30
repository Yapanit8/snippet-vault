import { defineStore } from "pinia";
import { ref } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
  const isAddSnippetOpen = ref(false)

  const openAddSnippet = () => {
    isAddSnippetOpen.value = true
  }

  const closeAddSnippet = () => {
    isAddSnippetOpen.value = false
  }

  return { isAddSnippetOpen, openAddSnippet, closeAddSnippet }

})