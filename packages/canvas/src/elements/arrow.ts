import { defineElement } from '../element-structor'

export interface ArrowAttributes {
  from: [number, number]
  to: [number, number]
  color?: string
}

export const arrow = defineElement<ArrowAttributes>((options) => {
  return (board) => {
    return board.create('arrow', [options.from, options.to], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

