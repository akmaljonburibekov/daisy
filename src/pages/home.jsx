import React from 'react'
import { useFetch } from '../hooks/useFetch'
import ArticleList from '../components/ArticleList'

function home() {
  const {data: articles, isPending, error} = useFetch('http://localhost:3000/articles')
  return (
    <div>
      {articles && <ArticleList articles={articles}/>}
    </div>
  )
}

export default home