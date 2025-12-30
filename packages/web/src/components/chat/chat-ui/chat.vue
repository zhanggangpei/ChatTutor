<script setup lang="ts">
import { PromptArea, type Resource } from '#/components/prompt-area'
import { ref } from 'vue'

const input = ref('')
const resources = ref<Resource[]>([])
</script>

<template>
  <div class="size-full p-2 flex flex-col gap-2">
    <div class="flex flex-col h-full">d</div>
    <div class="flex flex-col items-end mb-auto">
      <div class="h-48 w-full">
        <PromptArea v-model:input="input" v-model:resources="resources" />
      </div>
    </div>
  </div>
</template>