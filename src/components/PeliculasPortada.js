import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { PeliculasLista } from "./PeliculasLista";
import styles from "./PeliculasPortada.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Vacio } from "./Vacio";

export function PeliculasPortada({ busqueda }) {
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const busquedaPelicula = busqueda ? "/search/movie?query=" + busqueda + "&page" + pagina : "/discover/movie?page=" + pagina;
    get(busquedaPelicula).then((data) => {
        setPeliculas((prevMovies) => prevMovies.concat(data.results));
        setHasMore(data.page < data.total_pages);
        setIsLoading(false);
    });
  }, [busqueda, pagina]);

  if (!isLoading && peliculas.length === 0) {
    return <Vacio />;
  }

  return (
    <InfiniteScroll dataLength={peliculas.length} hasMore={hasMore} next={() => setPagina((prevPage) => prevPage + 1)} loader={<Spinner />}>
      <ul className={styles.peliculasPortada}>
        {peliculas.map((pelicula) =>
          <PeliculasLista key={pelicula.id} pelicula={pelicula} />
        )}
      </ul>
    </InfiniteScroll>
  );
}