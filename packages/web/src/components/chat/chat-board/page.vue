<script setup lang="ts">
import { PageType, type Page } from '@chat-tutor/shared'
import MermaidPage from './mermaid-page.vue'

defineProps<{
  current: string | null
  pages: Page[]
}>()
</script>

<template>
  <div class="size-full">
    <div
      v-for="page in pages"
      :key="page.id"
      class="size-full"
    >
      <MermaidPage
        v-if="page.type === PageType.MERMAID"
        v-show="current === page.id"
        :page="page"
      />
    </div>
  </div>
</template>
