import { NewsRes } from "../typings";

export default function sortnews(news:NewsRes){
    const newswithimages = news.data.filter((item) => item.image !== null);
    const newswithoutimages = news.data.filter((item) => item.image === null);
    const sortednewsresponse={
        pagination : news.pagination,
        data: [...newswithimages,...newswithoutimages],
    }
    return sortednewsresponse;
}