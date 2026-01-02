<script setup lang="ts">
import { Sidebar } from '#/components/sidebar'
</script>

<template>
  <div class="size-full flex overflow-hidden">
    <Sidebar>
      <template #main>
        <RouterView />
      </template>
    </Sidebar>
  </div>
</template>

