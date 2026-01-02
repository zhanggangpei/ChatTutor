<script setup lang="ts">
import type { Page } from '@chat-tutor/shared'
import PageNotes from './page-notes.vue'

defineProps<{
  pages: Page[]
  current: string | null
}>()
</script>

<template>
  <div class="size-full flex flex-col gap-2">
    <span class="text-md font-bold text-gray-500 dark:text-gray-400">Notes</span>
    <div class="flex flex-col w-full overflow-y-auto">
      <div
        v-for="page in pages"
        v-show="current === page.id"
        :key="page.id"
class="size-full"
      >
        <PageNotes :page="page" />
      </div>
    </div>
  </div>
</template>
