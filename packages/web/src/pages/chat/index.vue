<script setup lang="ts">
import { ChatUI, ChatBoard, ChatPagination } from '#/components/chat'
import { useCreateChatStore } from '#/utils/stores'
import { useChat } from '#/composables/use-chat'
import { useRoute } from 'vue-router'
import { Loading } from '#/components/loading'
import { onMounted, ref } from 'vue'

const route = useRoute()

const {
  messages,
  pages,
  running,
  sync,
  ask
} = useChat(route.params.id as string)

const loading = ref(true)
const store = useCreateChatStore()

onMounted(async () => {
  await sync()
  if (store.prompt !== null || store.resources.length > 0) {
    const prompt = store.prompt!
    const resources = store.resources
    store.prompt = null
    store.resources = []
    ask(prompt, resources)
  }
  loading.value = false
})


</script>

<template>
  <template v-if="loading">
    <Loading />
  </template>
  <div v-else class="size-full flex flex-row overflow-hidden">
    <div class="w-5/7 flex flex-col h-full py-2 gap-2 overflow-hidden">
      <div class="flex flex-row flex-1 min-h-0 overflow-hidden">
        <ChatBoard />
      </div>
      <div class="flex flex-row h-48 shrink-0">
        <ChatPagination />
      </div>
    </div>
    <div class="w-2/7 h-full overflow-hidden">
      <ChatUI v-model:messages="messages" :running="running" @send="(input, resources) => ask(input, resources)" />
    </div>
  </div>
</template>