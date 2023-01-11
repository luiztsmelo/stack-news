import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Article from '../Article.vue'

describe('Article', () => {
  it('renders properly', () => {
    const wrapper = mount(Article, {
      props: {
        article: {
          author: 'Tarcisio Melo',
          content: 'Testes unitários profissionalizam a entrega do desenvolvedor de software.',
          description: null,
          publishedAt: '2023-01-02T12:00:20Z',
          source: {
            id: null,
            name: 'Hackaday'
          },
          title: 'Tarcisio gosta de escrever testes unitários.',
          url: 'https://hackaday.com/2023/01/02/generative-music-created-in-minimalistic-javascript-code/',
          urlToImage: 'https://hackaday.com/wp-content/uploads/2022/12/Dittytoy.png?w=800'
        }
      }
    })

    expect(wrapper.get('#article-title').text()).toEqual('Tarcisio gosta de escrever testes unitários.')
  })
})
