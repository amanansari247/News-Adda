import { type } from "os";

type Article ={
  author: string | null;
  category: string | null;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};
type Pagination = {
  count: Int;
  limit : Int;
  offset : Int;
  total: Int;
}
type NewsRes ={
  pagination : Pagination;
  data: ArticlesEntry[];
  
 
};
type Category = 
| "science"
| "entertainment"
| "health"
| "sports"
| "technology"
| "bussiness";
