import { Link } from "react-router-dom";
import styles from "./PeliculasLista.module.css";
import { getPlaceholder } from "../utils/getPlaceholder";

export function PeliculasLista({ pelicula }) {
    const portada = getPlaceholder(pelicula.poster_path, 300);
    return (
        <li className={styles.listaPeliculas}>
            <Link to={"/peliculas/" + pelicula.id}>
                <img width={230} height={345} className={styles.peliculaImagen} src={portada} alt={pelicula.title} />
                <div>{pelicula.title}</div>
            </Link>
        </li>
    );
}