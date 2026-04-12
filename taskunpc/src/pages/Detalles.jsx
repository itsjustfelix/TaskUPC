import { useParams, useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext.jsx";

function DetallesTarea() {
  const { id } = useParams();
  const { tareas, eliminarTarea } = useTareas();
  const navigate = useNavigate();

  const tarea = tareas.find((t) => t.id === Number(id));
  if (!tarea) {
    return <h2>Tarea no encontrada</h2>;
  }
  function handleEliminar() {
    eliminarTarea(tarea.id);
    navigate("/");
  }

  function handleVolver() {
    navigate("/");
  }
  return (
    <div>
      <h2>{tarea.titulo}</h2>
      <p>Materia: {tarea.materia}</p>
      <p>Fecha: {tarea.fecha}</p>
      <p>Estado: {tarea.completada ? "Completada" : "Pendiente"}</p>
      <button onClick={handleVolver}>Volver</button>
      <button onClick={handleEliminar}>Eliminar</button>
    </div>
  );
}
export default DetallesTarea;
