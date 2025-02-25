import React, { useEffect, useState } from 'react';
import VodStrip from './vodStrip';
import { useSearchParams } from 'react-router-dom'
import VodList from './vodlist';
import "./home.css";

function Home() {
  const [querys] = useSearchParams();
  const[ar,setAr] = useState([])
  useEffect(() => {
    let searchQ = querys.get("s") || "superman";
    doApi(searchQ);
  },[querys]);

  const doApi = async (_searchQ) => {
    let myUrl = `https://www.omdbapi.com/?s=${_searchQ}&apikey=521c8106`;
    let resp = await fetch(myUrl);
    let data = await resp.json();
    console.log(data);
    setAr(data.Search)
  };

  return (
    <React.Fragment>
      <VodStrip />
      
      <VodList vod_ar={ar} />
      
    </React.Fragment>
  );
}

export default Home;
