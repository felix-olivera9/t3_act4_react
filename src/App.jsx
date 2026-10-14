import React from 'react';
import UserCard from './components/UserCard';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Práctica de React - Tec Oaxaca</h1>
        <p>Programación Web</p>
      </header>

      <main>
        {/* Componente con Props */}
        <UserCard 
          nombre="Félix Eliel Olivera Jiménez" 
          carrera="Ingeniería en Sistemas Computacionales" 
          semestre="7mo Semestre" 
        />

        {/* Componente con Estado y Lista Dinámica (.map) */}
        <TodoList />
      </main>
    </div>
  );
}

export default App;