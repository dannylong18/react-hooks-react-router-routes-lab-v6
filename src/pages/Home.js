import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import Movie from "./Movie";

function Home() {
  const [movieData, setMovieData] = useState([])

    useEffect (() => {
        fetch (`http://localhost:4000/movies/`)
    .then(r => r.json())
    .then((movies) => {setMovieData(movies)})
      }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movieData.map((titleObj) => 
        <MovieCard key={titleObj.id} title={titleObj.title} id={titleObj.id} />
        )}
      </main>
    </>
  );
};

export default Home;
