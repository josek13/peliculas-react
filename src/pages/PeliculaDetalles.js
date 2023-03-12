import { useEffect, useState } from "react";

import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { getPlaceholder } from "../utils/getPlaceholder";
import { get } from "../utils/httpClient";
import styles from "./PeliculaDetalles.module.css";

export function PeliculaDetalles() {
    const { peliculaId } = useParams();
    const [ isLoading, setIsLoading ] = useState(true);
    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + peliculaId).then(data => {
            setPelicula(data);
            setIsLoading(false);
        })
    }, [peliculaId]);

    if (isLoading) {
        return <Spinner />;
    }

    const portada = getPlaceholder(pelicula.poster_path, 500);
    return <div className={styles.contenedorDetalles}>
        <img className={`${styles.col} ${styles.imagenPelicula}`} src={portada} alt={pelicula.title} />
        <div className={`${styles.col} ${styles.detallesPelicula}`}>
            <p className={styles.primerElemento}>
                <strong>Titulo:</strong> {pelicula.title}
            </p>
            <p>
                <strong>Generos:</strong> {pelicula.genres.map(genre => genre.name).join(", ")}
            </p>
            <p>
                <strong>Descripción:</strong> {pelicula.overview}
            </p>
        </div>
    </div>
}