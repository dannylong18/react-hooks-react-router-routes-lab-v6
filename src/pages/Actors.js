import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
//test
function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(r => r.json())
    .then((data) => setActors(data))
  }, [])

  const actorInfo = actors.map((item) => {
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
        <h1>Actors Page</h1>
        {actorInfo}
      </main>
    </>
  );
};

export default Actors;
