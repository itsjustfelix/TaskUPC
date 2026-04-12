import "./App.css";
import Header from "./components/Header";
import { ListaTarea } from "./components/ListaTarea";
import { Routes, Route } from "react-router-dom";
import NuevaTarea from "./pages/NuevaTarea.jsx";
import DetallesTarea from "./pages/Detalles.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ListaTarea />} />
        <Route path="/nueva" element={<NuevaTarea />} />
        <Route path="/tarea/:id" element={<DetallesTarea />} />
      </Routes>
    </div>
  );
}
export default App;
