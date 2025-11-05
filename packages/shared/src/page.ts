import type { Action, FullAction } from './action'

export enum PageType {
  TEXT = 'text',
  CANVAS = 'canvas',
}

export interface Page<T extends Action = FullAction> {
  type: string | PageType
  title: string
  id?: string
  steps: T[]
}
