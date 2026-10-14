import React, { useState } from 'react';

function TodoList() {
  // Estado para la lista de tareas iniciales
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Configurar proyecto en React con Vite' },
    { id: 2, texto: 'Crear componentes y pasar props' },
    { id: 3, texto: 'Implementar hooks y eventos' }
  ]);

  // Estado para el texto del input de nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Función para agregar una nueva tarea
  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === '') return;

    const objetoTarea = {
      id: Date.now(), // ID único basado en timestamp
      texto: nuevaTarea
    };

    setTareas([...tareas, objetoTarea]); // Actualiza el estado agregando la nueva tarea
    setNuevaTarea(''); // Limpia el input
  };

  // Función para eliminar una tarea por su id
  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter(t => t.id !== id);
    setTareas(tareasFiltradas);
  };

  return (
    <div className="todo-container">
      <h3>Mis Tareas Pendientes (Usando una lista y estados)</h3>
      
      {/* Formulario para nueva tarea */}
      <form onSubmit={agregarTarea} className="todo-form">
        <input 
          type="text" 
          placeholder="Escribe una nueva tarea..." 
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      {/* Lista renderizada dinámicamente con .map() */}
      <ul className="todo-list">
        {tareas.map((tarea) => (
          <li key={tarea.id} className="todo-item">
            <span>{tarea.texto}</span>
            <button onClick={() => eliminarTarea(tarea.id)} className="delete-btn">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;