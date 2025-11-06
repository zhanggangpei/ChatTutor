import { defineElement } from '../element-structor'

export interface CircleAttributes {
  center: [number, number]
  radius: number
  color?: string
}

export const circle = defineElement<CircleAttributes>((options) => {
  return (board) => {
    return board.create('circle', [options.center, options.radius], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

