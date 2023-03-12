import styles from "./App.module.css";
import { PeliculaDetalles } from './pages/PeliculaDetalles';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PaginaInicio } from './pages/PaginaInicio';

export default function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.titulo}>Películas</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/peliculas/:peliculaId" element={<PeliculaDetalles />} />
          <Route path="/" element={<PaginaInicio />} />
        </Routes>
      </main>
    </Router>
  );
}
