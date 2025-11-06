import type { Board } from 'jsxgraph'

export type ElementGetter = <T = unknown>(id: string) => T
export type ElementStructor<T extends object = object> = (options: T, getter: ElementGetter) => 
  (board: Board) => unknown

export const defineElement = <T extends object>(constructor: ElementStructor<T>) => constructor

