import { JSXGraph, type Board } from 'jsxgraph'
import type { CanvasPageAction } from './page'
import type { ElementAction } from './element'
import { structures } from './elements'
import type { ElementStructor, ElementGetter } from './element-structor'

export type { ElementStructor, ElementGetter }
export { defineElement } from './element-structor'
export type ElementPool = Map<string, unknown>
export const elements = new Map<string, ElementStructor>()
export const registerElement = <T extends object>(name: string, constructor: ElementStructor<T>) => {
  elements.set(name, <ElementStructor<object>>constructor)
}

structures.forEach(([name, constructor]) => registerElement(name, constructor))

export const createCanvasRenderer = (id: string) => {
  const board = JSXGraph.initBoard(id, {
    boundingBox: [-10, 10, 10, -10],
    grid: true,
  })
  const pool = new Map<string, unknown>()
  const getElement: ElementGetter = <T = unknown>(id: string) => {
    return pool.get(id) as T
  }

  const add = (action: typeof ElementAction.infer) => {
    const element = elements.get(action.options.name)
    if (element) {
      const setup = element(action.options.attrs, getElement)
      pool.set(action.options.id, setup(board))
    }
  }

  const load = (actions: CanvasPageAction[]) => {
    for (const action of actions) {
      if (action.type === 'element') add(action)
    }
  }

  return {
    board,
    getElement,
    load,
    add,
  }
}
