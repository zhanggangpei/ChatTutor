<script setup lang="ts">
import type { NoteAppendAction, Page } from '@chat-tutor/shared'
import { MarkdownRender } from 'markstream-vue'

defineProps<{
  pages: Page[]
  current: string | null
}>()

const filterNotes = (page: Page) => {
  const steps = page.steps.filter(step => step.type === 'note-append')
  return steps.map(step => (step as NoteAppendAction).options.content).join('\n')
}
</script>

<template>
  <div class="size-full flex flex-col gap-2">
    <span class="text-md font-bold text-gray-500 dark:text-gray-400">Notes</span>
    <div class="flex flex-col w-full overflow-y-auto">
      <div
        v-for="page in pages"
        v-show="current === page.id"
        :key="page.id"
      >
        <MarkdownRender :content="filterNotes(page)" />
      </div>
    </div>
  </div>
</template>
