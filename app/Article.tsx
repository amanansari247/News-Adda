import { Article } from "../typings";
import Footer from "./Footer";
import ReadMore from "./ReadMore";

type Props = {
  article : Article
}

function Article({article}:Props) {
  return (
    <article className="bg-slate-200 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-300 transition-all duration-200 ease-out">
    <img
        src={article.image || "https://www.linkpicture.com/q/logo-news-adda.png"}
        alt={article.title}
        className="h-56 w-full object-cover rounded-t-lg shadow-md"
      />
   <div className="flex-1 flex flex-col">
    <div className="flex-1 flex flex-col p-5">
      <h2 className="font-bold font-serif">{article.title}</h2>
      <section className=" mt-2 flex-1">
        <p className="text-xs line-clamp-3">{article.description}</p>
      </section>
      <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-500">
        <p>{article.source}</p>
        <p>{article.published_at}</p>
      </footer>
    </div>
    <ReadMore article ={article}/>
   </div>
   
    </article>
    
  );
}
export default Article;
