import { tareasIniciales } from "../data/tarea.js";
import TareaCard from "./TareaCard.jsx";

export function ListaTarea() {
  return (
    <div>
      {tareasIniciales.map((tarea) => (
        <TareaCard
          key={tarea.id}
          titulo={tarea.titulo}
          materia={tarea.materia}
          estado={tarea.completada}
        />
      ))}
    </div>
  );
}
