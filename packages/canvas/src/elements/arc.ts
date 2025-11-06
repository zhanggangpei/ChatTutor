import { defineElement } from '../element-structor'

export interface ArcAttributes {
  center: [number, number]
  from: [number, number]
  to: [number, number]
  color?: string
}

export const arc = defineElement<ArcAttributes>((options) => {
  return (board) => {
    return board.create('arc', [options.center, options.from, options.to], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

