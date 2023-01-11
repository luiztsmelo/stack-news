<script setup lang="ts">
import type { PropType } from 'vue'
import type { IArticle } from '@/types/news'
import Article from '@/components/Article.vue'

const props = defineProps({
  isFetching: {
    type: Boolean,
    required: true
  },
  error: {
    type: String,
    required: true
  },
  articles: {
    type: Object as PropType<IArticle[]>,
    required: true
  }
})
</script>

<template>
  <div v-if="isFetching">
    <p class="text-xl font-medium">Loading...</p>
  </div>

  <div class="flex flex-col" v-if="!isFetching && props.articles && props.articles.length > 0">
    <Article v-for="article in props.articles" :key="article.url" :article="article"></Article>
  </div>

  <div v-if="!isFetching && props.articles && props.articles.length === 0">
    <p class="text-xl font-medium">Not found any articles. Try another query, please.</p>
  </div>

  <div>
    <p class="text-xl font-medium" v-if="!isFetching && error">{{ props.error }}</p>
  </div>
</template>
