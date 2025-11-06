import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'circle',
  description: 'A circle defined by a center point and radius',
  attrs: [
    {
      name: 'center',
      description: 'The center point of the circle, a number tuple like [x, y]',
      required: true,
    },
    {
      name: 'radius',
      description: 'The radius of the circle',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the circle',
      required: false,
    },
  ],
})

