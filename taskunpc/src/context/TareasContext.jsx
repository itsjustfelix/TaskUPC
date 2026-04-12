import { createContext, useState, useContext, useEffect } from "react";
import { tareasIniciales } from "../data/tarea.js";

const TareasContext = createContext();

export function TareaProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : tareasIniciales;
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  function AgregarTarea(form) {
    const nuevaTarea = {
      id: tareas.length + 1,
      titulo: form.titulo,
      materia: form.materia,
      fecha: form.fecha,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }
  function toggleTarea(id) {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      ),
    );
  }

  return (
    <TareasContext.Provider
      value={{ tareas, setTareas, toggleTarea, AgregarTarea, eliminarTarea }}
    >
      {children}
    </TareasContext.Provider>
  );
}

export function useTareas() {
  return useContext(TareasContext);
}
