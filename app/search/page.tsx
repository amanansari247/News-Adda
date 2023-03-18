import React from 'react'
import { NewsRes } from '../../typings'
import fetchNews from '../../lib/fetchNews'
import Newslist from '../Newslist'
type props = {
    searchParams?: {term : string }
}

async function SearchPage({searchParams} :props) {
  const news: NewsRes = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
    return (
    <div>
      <h1>Search Results For: {searchParams?.term}</h1>
      <Newslist news={news}/>
    </div>
  )
}

export default SearchPage
