<script setup lang="ts">
import type { PropType } from 'vue'
import type { IArticle } from '@/types/news'
import { format } from 'date-fns'

const props = defineProps({
  article: {
    type: Object as PropType<IArticle>,
    required: true
  }
})

const publishedDateFormatted = (date: string) => {
  return format(new Date(date), "dd MMM'.' yyyy '-' hh':'mm")
}

const authorFormatted = (author: string) => {
  return author.replace(';', ' ')
}
</script>

<template>
  <a
    class="grid grid-cols-[1fr] sm:grid-cols-[1fr_3fr] gap-5 py-8 border-b-[1px] last:border-b-0 border-b-gray-700 border-b-solid hover:bg-gray-800 transition duration-200 ease"
    :href="props.article.url"
    target="_blank"
  >
    <div class="h-[200px] bg-gray-700 rounded-xl overflow-hidden">
      <img :src="props.article.urlToImage" class="h-full w-full object-cover" v-if="props.article.urlToImage" />
      <div class="w-full h-full bg-gray-700" v-else></div>
    </div>

    <div class="mt-3">
      <div class="flex flex-wrap items-center">
        <p class="uppercase font-semibold text-blue-400 text-xs mr-3">{{ props.article.source.name }}</p>
        <p class="text-red-400 font-medium text-sm mr-3" v-if="props.article.author">
          {{ authorFormatted(props.article.author) }}
        </p>
        <p class="text-gray-400 text-sm">{{ publishedDateFormatted(props.article.publishedAt) }}</p>
      </div>

      <p id="article-title" class="font-bold text-2xl">{{ props.article.title }}</p>
      <p class="text-gray-300 text-md mt-2">{{ props.article.description }}</p>
    </div>
  </a>
</template>
