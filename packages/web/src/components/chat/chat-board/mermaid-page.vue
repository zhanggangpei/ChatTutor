<script setup lang="ts">
import type { MermaidPage, MermaidUpdateAction } from '@chat-tutor/shared'
import { MermaidBlockNode } from 'markstream-vue'

defineProps<{
  page: MermaidPage
}>()

const filterContent = (page: MermaidPage) => {
  const steps = page.steps.filter(step => step.type === 'mermaid-update')
  console.log(steps)
  const lastStep = steps[steps.length - 1]
  const content = lastStep ? (lastStep as MermaidUpdateAction).options.content : ''
  console.log(content)
  return {
    type: 'code_block',
    language: 'mermaid',
    code: content,
    raw: ''
  }
}
</script>

<template>
  <MermaidBlockNode
    :node="filterContent(page)"
    max-height="100%"
    class="size-full"
  />
</template>