import { defineElement } from '../element-structor'

export interface BoxplotAttributes {
  quantiles: [number, number, number, number, number]
  axis: number
  width: number
  direction?: 'vertical' | 'horizontal'
  color?: string
}

export const boxplot = defineElement<BoxplotAttributes>((options) => {
  return (board) => {
    return board.create('boxplot', [options.quantiles, options.axis, options.width], {
      dir: options.direction ?? 'vertical',
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

