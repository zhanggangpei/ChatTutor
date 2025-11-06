import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'arrow',
  description: 'An arrow from one point to another',
  attrs: [
    {
      name: 'from',
      description: 'The starting point of the arrow, a number tuple like [x, y]',
      required: true,
    },
    {
      name: 'to',
      description: 'The ending point of the arrow, a number tuple like [x, y]',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the arrow',
      required: false,
    },
  ],
})

