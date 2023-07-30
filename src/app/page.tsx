"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Row from "./Row";
import requests from './requests'
import Banner from "./Banner";
import Navbar from "./Navbar";


export default function Home() {
  // const fetchUrl = requests.fetchNetflixOriginals
  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <Banner />
        
        <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow ={true} />
        
        <Row title="TRENDING NOW" fetchUrl = {requests.fetchTrending} />
        <Row title="ACTION MOVIES" fetchUrl = {requests.fetchActionMovies} />
        <Row title="COMEDY MOVIES" fetchUrl = {requests.fetchComedyMovies} />
        <Row title="HORROR MOVIES" fetchUrl = {requests.fetchHorrorMovies} />
        <Row title="DOCUMENTARIES" fetchUrl = {requests.fetchDocumentaries} />
        <Row title="ROMANCE MOVIES" fetchUrl = {requests.fetchRomanceMovies} />
        <Row title="TOP RATED" fetchUrl = {requests.fetchTopRated} />

      </div>
    </>
  );
}
