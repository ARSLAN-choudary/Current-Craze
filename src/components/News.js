import React, { useEffect,useState } from 'react'
import Newsitems from './Newsitems'
import Sppiner from './Sppiner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {
const[articles,setArticles]=useState([])
const[loading,setLoading]=useState(true)
const[page,setPage]=useState(1)
const[totalResults,settotalResults]=useState(0)


const updateNews = async()=>{
      props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1d14dc2881c146ecb4c5cd5b6cf0e75c&page=${page}&pageSize=${props.pageSize}`;
     
     setLoading(true)
     let data = await fetch(url);
     props.setProgress(30);
     let parsedData = await data.json();
     props.setProgress(70);
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
    }
    useEffect(()=>{
      document.title=`CurrentCraze-${props.category}`;
     updateNews()
    },[])
 
  //   const handleprevClick=async()=>{
  //     setPage(page-1);
  //      updateNews()
  //   }
  //   const handlenextClick=async()=>{
  //       setPage(page+1)
  //       updateNews()
  // }
 const fetchMoreData =async () => {
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1d14dc2881c146ecb4c5cd5b6cf0e75c&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData)
     setArticles(articles.concat(parsedData.articles))
     settotalResults(parsedData.totalResults)
     
  };

    return (
      <>
        <h2 className='text-center'>CurrentCraze-Top {props.category} HeadLines</h2>
         {loading && <Sppiner/>}
         <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Sppiner/>}
        >
          <div className="container">
        <div className="row">
        { articles.map((element)=>{
              return <div className=" col-md-4"key={element.url}>
               <Newsitems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                   </div>
        })}
         
        </div>
        </div>
        </InfiniteScroll>
    
     </>
    )
  
}


News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general',
}
News. propTypes ={
 country:PropTypes.string,
 pageSize:PropTypes.number,
 category:PropTypes.string,
}

export default News
