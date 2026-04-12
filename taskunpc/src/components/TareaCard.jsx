import { Component } from "react";
import { useTareas } from "../context/TareasContext";
function TareaCard({ titulo, materia, estado, id }) {
  const { toggleTarea } = useTareas();
  return (
    <div style={{ opacity: estado ? 0.5 : 1 }}>
      <h3 style={{ textDecoration: estado ? "line-through" : "none" }}>
        {titulo}
      </h3>
      <span>{materia}</span>
      <p>Estado: {estado ? "Completada" : "Pendiente"}</p>
      <button onClick={() => toggleTarea(id)}>
        {estado ? "Desmarcar" : "Completado"}
      </button>
    </div>
  );
}
export default TareaCard;
