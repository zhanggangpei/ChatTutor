import { point } from './point'
import { line } from './line'
import { func } from './func'
import type { ElementStructor } from '../element-structor'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const structures: [string, ElementStructor<any>][] = [
  ['point', point],
  ['line', line],
  ['func', func],
]

export * from './point'
export * from './line'
export * from './func'