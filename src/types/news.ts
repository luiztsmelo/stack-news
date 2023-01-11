export interface IArticle {
  author: string | null
  content: string
  description: string | null
  publishedAt: string
  source: {
    id: string | null
    name: string
  }
  title: string
  url: string
  urlToImage: string | null
}
