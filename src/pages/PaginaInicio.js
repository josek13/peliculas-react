import { Buscar } from "../components/Buscar";
import { PeliculasPortada } from "../components/PeliculasPortada";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

export function PaginaInicio() {
    const query = useQuery();
    const busqueda = query.get("busqueda");

    const debouncedSearch = useDebounce(busqueda, 500);
    return <div>
            <Buscar />
            <PeliculasPortada key={debouncedSearch} busqueda={debouncedSearch} />
        </div>
}