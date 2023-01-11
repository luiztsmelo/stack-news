<script setup lang="ts">
import { onBeforeMount, ref, watch, computed } from 'vue'
import ArticleList from '@/components/ArticleList.vue'
import { useRouter, useRoute } from 'vue-router'
import { useNewsFetch } from '@/composables/news'

const router = useRouter()
const route = useRoute()

const selectedQuery = ref('javascript')

onBeforeMount(() => {
  const query = { ...route.query }

  query.q = selectedQuery.value

  router.push({ query })
})

const queries = [
  {
    text: 'JavaScript',
    value: 'javascript'
  },
  {
    text: 'Vue.js',
    value: 'vuejs'
  },
  {
    text: 'TypeScript',
    value: 'typescript'
  },
  {
    text: 'Vite',
    value: 'vite'
  },
  {
    text: 'Vitest',
    value: 'vitest'
  },
  {
    text: 'Cypress',
    value: 'cypress'
  },
  {
    text: 'Tailwind CSS',
    value: 'tailwindcss'
  },
  {
    text: 'WebSocket',
    value: 'websocket'
  }
]

const url = computed(() => {
  return `https://newsapi.org/v2/everything?apiKey=9e94e4ee7357465ba349a86ac02b08f8&pageSize=10&language=en${
    route.query.q ? '&q=' + route.query.q : ''
  }`
})

watch(selectedQuery, (value) => {
  if (value) {
    const query = { ...route.query }

    query.q = value

    router.push({ query })
  }
})

const { isFetching, error, data } = useNewsFetch(url, { refetch: true }).json()
</script>

<template>
  <main>
    <div class="flex flex-wrap gap-3 mb-10">
      <button
        class="text-sm font-medium text-white rounded-lg px-5 py-2 transition duration-200 ease"
        :class="selectedQuery === query.value ? 'bg-blue-700 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'"
        v-for="query in queries"
        :key="query.value"
        @click="selectedQuery = query.value"
      >
        {{ query.text }}
      </button>
    </div>

    <ArticleList :is-fetching="isFetching" :error="error" :articles="data.articles"></ArticleList>
  </main>
</template>
