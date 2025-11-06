import { defineElement } from '../element-structor'

export interface LineAttributes {
  from: [number, number]
  to: [number, number]
}

export const line = defineElement<LineAttributes>((options) => {
  return (board) => {
    return board.create('line', [options.from, options.to])
  }
})
