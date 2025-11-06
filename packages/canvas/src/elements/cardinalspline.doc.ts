import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'cardinalspline',
  description: 'A smooth curve (cardinal spline) through a set of points',
  attrs: [
    {
      name: 'points',
      description: 'Array of points to create the spline through, each point is a tuple like [x, y]',
      required: true,
    },
    {
      name: 'tau',
      description: 'Tension parameter for the cardinal spline (0-1, where 0 is linear and 1 is very curved)',
      required: false,
      default: '0.5',
    },
    {
      name: 'color',
      description: 'The color of the spline curve',
      required: false,
    },
  ],
})

