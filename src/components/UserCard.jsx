import React from 'react';

function UserCard({ nombre, carrera, semestre }) {
  return (
    <div className="user-card">
      <h2>Perfil del Estudiante</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Carrera:</strong> {carrera}</p>
      <p><strong>Semestre:</strong> {semestre}</p>
    </div>
  );
}

export default UserCard;