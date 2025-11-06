import { defineElement } from '../element-structor'

export interface MajorarcAttributes {
  center: [number, number]
  from: [number, number]
  to: [number, number]
  color?: string
}

export const majorarc = defineElement<MajorarcAttributes>((options) => {
  return (board) => {
    return board.create('majorarc', [options.center, options.from, options.to], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

