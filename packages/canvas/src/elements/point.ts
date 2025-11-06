import { defineElement } from "../element-structor"

export interface PointAttributes {
  x: number
  y: number
  name: string
}

export const point = defineElement<PointAttributes>((options) => {
  return (board) => {
    return board.create('point', [options.x, options.y], {
      name: options.name,
    })
  }
})
