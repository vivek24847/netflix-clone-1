import React from 'react'
import {useState, useEffect} from "react"
import axios from "./axios"
import requests from './requests'

interface Movies{
    name?:string;
    title?:string;
    original_name?:string;
    backdrop_path:string;
    overview:string
}

const Banner = () => {
   const [movies, setMovies] = useState<Movies[]>([])

   function truncate(str : string,n: number){
    return str?.length > n ? str.substr(0, n-1) + "..." : str; 
   }

   useEffect(()=>{
        async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals) 
          console.log(request,"request")
          setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
          return request
        } fetchData()
   },[])
   console.log(movies, "banner")

  return (
   <>
   <div className='bannerWrapper' 
    style={{ backgroundSize:"cover", backgroundPosition:"center",
        backgroundImage:`url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})`
    }}
    >
        <div className='subBanner'>
   <h2 className='bannerTitle'>{movies?.name || movies?.title || movies?.original_name}</h2>

    
    
        <button className='bannerButton'>Play</button>
        <button className='bannerButton'>My List</button>
        

    </div>
     <h5 className='bannerDescription'>{truncate(movies?.overview, 150)}</h5> 
     <div className='banner_fadeBottom '/>


   </div>
   
   </>
  )
}

export default Banner
