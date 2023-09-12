import React from "react";
import { useState } from "react";

function App() {
  // 1 задание
  const [numbers, setState] = useState([1, 2, 3]);

  // 2 задание
  const [name, setName] = useState("Алексей");
  const [nameInput, setNameInput] = useState("");
  const [age, setAge] = useState(19);

  // 3 задание
  const [liked, setLiked] = useState(false);

  // 1 задание
  function addNumber() {
    setState([...numbers, Math.floor(Math.random() * 10)]);
  }

  // 2 задание
  function changeName() {
    setName(nameInput);
  }

  function increaseAge() {
    setAge(age + 1);
  }

  function decreaseAge() {
    setAge(age - 1);
  }

  // 3 задание
  function toggleLike() {
    setLiked(!liked);
  }

  return (
    // 1 задание
    <div className="App">
      <div>
        <ul>
          {numbers.map((num, index) => (
            <li key={index}> {num} </li>
          ))}
        </ul>
        <button onClick={addNumber}>New number</button>
      </div>

      {/* 2 задание */}
      <div>
        <input
          type="text"
          placeholder="Введите имя"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              changeName();
            }
          }}
        />

        <h1> {name} </h1>
        <h1> {age} </h1>

        <button onClick={increaseAge}> Increase </button>
        <button onClick={decreaseAge}> Decrease </button>
      </div>

      {/* 3 задание */}
      <div>
        <label>
          <input type="checkbox" onChange={toggleLike}></input>
          Мне нравится это
        </label>
        <div>{liked ? "Тебе это нравится" : "Тебе это не нравится"}</div>
      </div>
    </div>
  );
}
export default App;
