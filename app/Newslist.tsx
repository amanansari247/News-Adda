'use client'
import { NewsRes } from '../typings';
import Article from './Article';
import { useState } from 'react';

type Props ={
  news: NewsRes;
}

function Newslist({ news }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articlesPerPage] = useState<number>(6); 

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const allArticles = news.data.slice(indexOfFirstArticle, indexOfLastArticle);
  const currentArticles = allArticles.slice(0, 6);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10'>
      {
        currentArticles.map((article) => (
          <Article key={article.title} article={article}/>
        ))
      }

      <div className='flex justify-evenly items-center'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          Prev
        </button>
        <p>Page: {currentPage}</p>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded'
          disabled={indexOfLastArticle >= news.data.length}
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </main>
  );
}
 export default Newslist;