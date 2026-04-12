import { Component } from "react";

class TareaCard extends Component {
  render() {
    const { titulo, materia, estado } = this.props;
    return (
      <div>
        <h3>{titulo}</h3>
        <span>{materia}</span>
        <p>Estado: {estado ? "Completada" : "Pendiente"}</p>
      </div>
    );
  }
}
export default TareaCard;
