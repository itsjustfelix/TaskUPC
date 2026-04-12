import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext.jsx";

function NuevaTarea() {
  const [form, setForm] = useState({
    titulo: "",
    materia: "",
    fecha: "",
  });
  const { AgregarTarea } = useTareas();
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    AgregarTarea(form);
    navigate("/");
  }

  return (
    <div>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título de la tarea"
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Materia"
          name="materia"
          value={form.materia}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Fecha"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
        />
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
}

export default NuevaTarea;
