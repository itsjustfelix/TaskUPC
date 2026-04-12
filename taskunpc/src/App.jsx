import "./App.css";
import Header from "./components/Header";
import { ListaTarea } from "./components/ListaTarea";
import { tareasIniciales } from "./data/tarea.js";
function App() {
  return (
    <div>
      <Header
        pendientes={tareasIniciales.filter((tarea) => !tarea.completada).length}
      />
      <ListaTarea />
    </div>
  );
}
export default App;
