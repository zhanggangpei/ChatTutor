import { point } from './point'
import { line } from './line'
import { func } from './func'
import { angle } from './angle'
import { arc } from './arc'
import { arrow } from './arrow'
import { circle } from './circle'
import { boxplot } from './boxplot'
import { cardinalspline } from './cardinalspline'
import { majorarc } from './majorarc'
import type { ElementStructor } from '../element-structor'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const structures: [string, ElementStructor<any>][] = [
  ['point', point],
  ['line', line],
  ['func', func],
  ['angle', angle],
  ['arc', arc],
  ['arrow', arrow],
  ['circle', circle],
  ['boxplot', boxplot],
  ['cardinalspline', cardinalspline],
  ['majorarc', majorarc],
]

export * from './point'
export * from './line'
export * from './func'
export * from './angle'
export * from './arc'
export * from './arrow'
export * from './circle'
export * from './boxplot'
export * from './cardinalspline'
export * from './majorarc'