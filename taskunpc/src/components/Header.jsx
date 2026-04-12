function Header({ pendientes }) {
  return (
    <header>
      <h1>TaskUPC</h1>
      <p>{pendientes} tareas pendientes</p>
    </header>
  );
}

export default Header;
