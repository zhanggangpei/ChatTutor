import { type } from 'arktype'

export const BaseAction = type({
  type: 'string',
  options: type.object
})

export type Action<T extends object = Record<string, unknown>, A extends string = string> = typeof BaseAction.infer & {
  type: A
  options: T
}

export interface FullAction<T extends object = Record<string, unknown>, A extends string = string> extends Action<T, A> {
  page?: string
}
