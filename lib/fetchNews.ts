import { Console } from "console";
import { gql } from "graphql-request";
import { METHODS } from "http";

import { categories } from "../constant";
import { Category } from "../typings";

import sortnews from "./sortnews";


const fetchNews = async (
  category?: Category | string,
  keywords?: string, 
  isDynamic?: boolean) => {
  const query = gql`
  query myQuery(
     $access_key: String,
     $countries: String,
     $keywords: String,
     $categories: String,
   
    
  ) {
    myQuery(
        access_key: $access_key
        countries: $countries
        keywords: $keywords
        categories: $categories
       
    ) {
      data {
        author
        category
        country
        description
        image
        language
        source
        published_at
        title
        url
      }
      pagination {
        count
        limit
        offset
        total
      }
    } 
  }
`;

const variables = {
  access_key:process.env.MEDIASTACK_API,
  countries:'in,us,gb,',
  keywords:keywords,
  category:category
}
 

  const res = await fetch('https://saintlinlaurentides.stepzen.net/MY-PROJECT/aman/__graphql', {
    method: "POST",
   
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `ApiKey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: variables,
    }),

  });



  const myResponse = await res.json()
  const news = sortnews(myResponse.data.myQuery)
 
  return news
}
export default fetchNews;
