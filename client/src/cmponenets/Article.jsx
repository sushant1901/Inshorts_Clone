import React from "react";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getNews } from "../service/Api";
import  Articles from './Articles'

const Article = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let response = await getNews();
    console.log(response.data);
    setNews(response.data);
  };

  return(
  <Box>
    {
      news.map(data=>(
        <Articles data={data}/>
      ))
    }
  
  </Box>
  )
};

export default Article;
