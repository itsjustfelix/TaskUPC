import TareaCard from "./TareaCard.jsx";
import { useTareas } from "../context/TareasContext.jsx";
import { useState } from "react";

export function ListaTarea() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "completadas") return tarea.completada;
    if (filtro === "pendientes") return !tarea.completada;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
        <button onClick={() => setFiltro("completadas")}>Completadas</button>
      </div>
      {tareasFiltradas.map((tarea) => (
        <TareaCard
          key={tarea.id}
          id={tarea.id}
          titulo={tarea.titulo}
          materia={tarea.materia}
          estado={tarea.completada}
        />
      ))}
    </div>
  );
}
