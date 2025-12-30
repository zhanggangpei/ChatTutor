export interface ImageResource {
  type: 'image'
  url: string
  id: string
}

export type Resource = ImageResource

export interface PromptAreaEmits {
  (e: 'send', input: string, resources: Resource[]): void
}

export interface PromptAreaProps {
  running?: boolean
}

