import type { Snippet } from '~/types'

export const useSnippetStore = defineStore('snippet-items', () => {

  const snippetItems = ref<Snippet[]>([])

  const addSnippet = (payload: Omit<Snippet, 'id' | 'createdDate'>) => {

    if(!payload.title.trim()){
      throw new Error("Snippet title is required!")
    }

    snippetItems.value.push({
      ...payload,
      id: crypto.randomUUID(),
      createdDate: new Date().toISOString()
    })

  }

  return { snippetItems, addSnippet }
}) 