import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const params = useParams()
  const userId = params.id
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${userId}`)
    .then(r => r.json())
    .then((data) => setMovie(data))
  }, [userId])

  if (!movie) {return <div>Loading...</div>}

  const { title, time, genres } = movie

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{title}</h1>
        <p>{time}</p>
        <div>
          Genres: 
          {genres.map((genre) => {
            return <span key={genre}>{genre}</span>})}
        </div>
      </main>
    </>
  );
};

export default Movie;
