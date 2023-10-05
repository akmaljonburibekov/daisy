import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

function Article() {
  const {id} = useParams()
  const url ='http://localhost:3000/articles/' + id;
  const {data:article, isPending, error} = useFetch(url)
  console.log(article);
  return (
   <>
    {article && <>
      <div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={article.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl">{article.title}</h2>
    <p className="italic text-2xl">Author: {article.author}</p>
    <p className="text-justify my-5">
      {article.body}
    </p>
    <div className="card-actions">
      <Link to="/" className="btn btn-primary">Article</Link>
    </div>
  </div>
</div>
    </>}
   </>
  )
}

export default Article