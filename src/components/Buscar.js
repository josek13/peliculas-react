import styles from "./Buscar.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Buscar() {
    const query = useQuery();
    const busqueda = query.get("busqueda");
    const historial = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.contenedorBusqueda} onSubmit={handleSubmit}>
            <div className={styles.cajaBusqueda}>
                <input className={styles.inputBusqueda} type="text" value={busqueda} onChange={(e) => {
                    const value = e.target.value;
                    historial("/?busqueda=" + value);
                }} placeholder="Buscar pelicula..." />
                <FaSearch size={20} className={styles.botonBusqueda} />
            </div>
        </form>
    );
}