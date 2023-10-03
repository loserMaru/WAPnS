import React from 'react';
import './person.css'; // Создайте файл Person.css для стилизации

function Person(props) {
  const { name, age = 20, email } = props;

  return (
    <div className="person">
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Person;
