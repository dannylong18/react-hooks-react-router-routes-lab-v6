import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(r => r.json())
    .then((data) => setDirectors(data))
  }, [])

  const directorInfo = directors.map((item) => {
    return ( 
      <article key={item.id}>
        <h2 key={item.id}>{item.name}</h2>
        <ul key={item.id}>
          {item.movies.map((movie, index) => {
            return(<>
             <li key={`${item.id}-${index}`}>{movie}</li>
            </>)
             })}
         </ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        <div>{directorInfo}</div>
      </main>
    </>
  );
};

export default Directors;
