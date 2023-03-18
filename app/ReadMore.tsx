"use client";
import Link from 'next/link';

import React from 'react'
import { Article } from '../typings'
type Props = {
    article : Article
}

export default function ReadMore({article} : Props) {
 

    return<Link  className="bg-indigo-200 h-15 rounded-b-lg hover:bg-indigo-300 text-center p-2 font-bold" href={article.url} target="_blank" >
    <button  >
        Read More
    </button>
    </Link>
  
}
