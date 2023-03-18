import { Category, NewsRes } from "../../../typings";
import fetchNews from "../../../lib/fetchNews";
import Newslist from "../../Newslist";
import { categories } from "../../../constant";

type Props = {
    params : {
        category: Category
    }
}
async function Newscategory({params : {category}}: Props) {
  const news : NewsRes = await fetchNews(
    category,
    category,
    true
  );
    return (
    <div>
      <h1 className="font-bold font-serif p-2"> Showing Category :{category}</h1>
      <Newslist  news={news}/>
    </div>
  )
}

export default Newscategory;

