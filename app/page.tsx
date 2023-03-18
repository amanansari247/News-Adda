import React from 'react'
import { categories } from '../constant'
import { NewsRes } from '../typings'
import fetchNews from '../lib/fetchNews'
import Newslist from './Newslist';
import response from "../resonse.json"


 async function page() {
   const news : NewsRes = await fetchNews(categories.join(","));
 
  return (
    <div>
      <Newslist news={news}/>
      
    </div>
  )
}
export default page
