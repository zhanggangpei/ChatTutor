import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'angle',
  description: 'An angle defined by three points. The second point is the vertex of the angle.',
  attrs: [
    {
      name: 'point1',
      description: 'The first point of the angle, a number tuple like [x, y]',
      required: true,
    },
    {
      name: 'point2',
      description: 'The vertex point of the angle, a number tuple like [x, y]',
      required: true,
    },
    {
      name: 'point3',
      description: 'The third point of the angle, a number tuple like [x, y]',
      required: true,
    },
    {
      name: 'radius',
      description: 'The radius of the angle arc. Can be a number or "auto"',
      required: false,
      default: 'auto',
    },
    {
      name: 'type',
      description: 'Display type of the angle: "sector", "square", or "none"',
      required: false,
      default: 'sector',
    },
    {
      name: 'color',
      description: 'The color of the angle (stroke and fill)',
      required: false,
    },
  ],
})

