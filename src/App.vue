<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col px-5 lg:px-36 pb-32 bg-gray-900 text-white min-h-screen">
    <header class="my-16">
      <span class="text-5xl text-[#41B883] font-thin">Stack News</span>
    </header>

    <RouterView />
  </div>
</template>
