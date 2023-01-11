import { createFetch } from '@vueuse/core';

const useNewsFetch = createFetch({
  baseUrl: 'https://newsapi.org/v2',

  fetchOptions: {
    mode: 'cors'
  }
})

export { useNewsFetch }
