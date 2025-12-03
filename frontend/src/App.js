import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewFilmePage from "./pages/NewFilmePage";
import EditFilmePage from "./pages/EditFilmePage";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Filmes</Link>
        <Link to="/novo">Novo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/novo" element={<NewFilmePage />} />
        <Route path="/editar/:id" element={<EditFilmePage />} />
      </Routes>
    </div>
  );
}

export default App;