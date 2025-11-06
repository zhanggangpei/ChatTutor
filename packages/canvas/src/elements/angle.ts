import { defineElement } from '../element-structor'

export interface AngleAttributes {
  point1: [number, number]
  point2: [number, number]
  point3: [number, number]
  radius?: number | 'auto'
  type?: 'sector' | 'square' | 'none'
  color?: string
}

export const angle = defineElement<AngleAttributes>((options) => {
  return (board) => {
    return board.create('angle', [options.point1, options.point2, options.point3], {
      radius: options.radius ?? 'auto',
      type: options.type ?? 'sector',
      ...(options.color && { strokeColor: options.color, fillColor: options.color }),
    })
  }
})

