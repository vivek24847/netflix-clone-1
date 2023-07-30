import React from "react";
import { useState, useEffect } from "react";
import YouTube from 'react-youtube';
import axios from "./axios";
import movieTrailer from "movie-trailer";

interface Movie {
  name: string;
  poster_path: string;
  id:string;
  backdrop_path:string
  // Add other properties as needed
}

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean
}

const Row: React.FC<RowProps> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      
      setMovies(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchUrl]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },}

    const handleClick = (movie: any) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          movieTrailer(movie?.name || "")
            .then((url: string) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v") ?? "");
            })
            .catch((error: string) => {
              console.log(error);
            });
        }
      };
      
  return (
    <>
    <div style={{marginTop:"20px"}}>
    <h3>{title}</h3> 
      <div className="movieRow">
       
        {movies.map((movie) => (
            
          <div key={movie.id} className="movieCards">
           
            <img
            onClick={() => handleClick(movie)}
              className={isLargeRow? "bigPoster":"poster"}
              src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
     {trailerUrl && <YouTube videoId={trailerUrl}  opts={opts} />} 
      </div>
    </>
  );
};

export default Row;
