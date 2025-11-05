import type { Page } from '@chat-tutor/shared'
import type { Tool } from 'xsai'
import { tool } from 'xsai'
import { type } from 'arktype'

export const getPageTools = async (pages: Page[]) => {
  const create = tool({
    name: 'create_page',
    description: 'Create a new page',
    parameters: type({
      id: 'string',
      title: 'string',
      type: type.enumerated('canvas')
    }),
    execute: async ({ id, title, type }) => {
      if (pages.find(page => page.id === id)) {
        return {
          success: false,
          message: 'Page already exists',
        }
      }
      pages.push({
        id,
        title,
        type,
        steps: [],
      })
      return {
        success: true,
        message: 'Page created successfully',
        id,
      }
    }
  })

  return await Promise.all([create]) as Tool[]
}