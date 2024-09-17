import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>Tareas pendientes</h1>
      <Card
        title="Hacer el front"
        description="Realizar el front de la aplicación"
        person="Juan Pérez"
        startDate="2024-09-01"
        endDate="2024-10-15"
      />
      <Card
        title="Hacer el back"
        description="Realizar el back de la aplicación"
        person="Juana Peraza"
        startDate="2024-10-16"
        endDate="2024-11-30"
      />
      <Card
        title="Mejorar la documentación"
        description="Mejorar la documentación de la aplicación"
        person="Justin Case"
        startDate="2024-12-01"
        endDate="2024-12-31"
      />
    </div>
  );
}

export default App;
