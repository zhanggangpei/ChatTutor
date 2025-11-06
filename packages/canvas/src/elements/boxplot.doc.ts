import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'boxplot',
  description: 'A box plot to present numerical data through their quartiles',
  attrs: [
    {
      name: 'quantiles',
      description: 'Array of five quantiles [min, q1, median, q3, max]',
      required: true,
    },
    {
      name: 'axis',
      description: 'Axis position of the box plot',
      required: true,
    },
    {
      name: 'width',
      description: 'Width of the rectangle part of the box plot',
      required: true,
    },
    {
      name: 'direction',
      description: 'Direction of the box plot: "vertical" or "horizontal"',
      required: false,
      default: 'vertical',
    },
    {
      name: 'color',
      description: 'The color of the box plot',
      required: false,
    },
  ],
})

