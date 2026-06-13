export type Tab = string[]
export interface Snippet {
  id?:string
  title: string
  stack: string[]
  code: string
  hashtags: string[]
  createdDate: string
}