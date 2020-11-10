import React,{useEffect,useState} from 'react';
import {ArticleService} from "components/Article"
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Articles() {
  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let data = ArticleService.getAll();
    data.on("value", (snapshot) => {
      const a = snapshot.val();
      const articlesList = [];
      for(let id in a){
        articlesList.push(a[id]);
      }
      setArticles(articlesList)
      setLoading(false)
    });
  }, [])
  
  return (<div>
    {loading ? <CircularProgress size={24} /> :
     articles ? articles.map((item,index) => <Article item={item} key={index} />) : "article list is empty"} 
     </div>)
}

  const Article = ({item}) =>{
    return (
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
    )
  }