<script setup lang="ts">
const { handleAction, board } = useBoard()
const { messages, input, send } = useChat(handleAction)

const { input: initialInput } = useRoute().query as { input: string }
input.value = initialInput
send()

onMounted(() => {
  console.log(board.value)
})
</script>

<template>
  <div class="flex flex-row w-full h-full overflow-hidden">
    <div class="flex flex-1 h-full items-center justify-center overflow-hidden">
      <div ref="board" class="w-full h-240 flex items-center justify-center"></div>
    </div>
    <div class="flex flex-col h-screen max-h-screen bg-gray-200 w-100 p-3 shadow-lg flex-shrink-0">
      <Chat :messages="messages" v-model:input="input" @keydown.enter="send" />
    </div>
  </div>
</template>