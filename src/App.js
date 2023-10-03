import React from "react";
import User from "./components/user";
import List from "./components/list";
import Person from "./components/person";
import Product from "./components/product";
import Counter from "./components/counter";

function App() {
  // Данные для компонентов
  const userData = {
    name: "Иван Иванов",
    age: 30,
  };

  const itemList = [
    { name: "Элемент 1" },
    { name: "Элемент 2" },
    { name: "Элемент 3" },
    { name: "Элемент 4" },
  ];

  const personData = {
    name: "Анна Смирнова",
    age: 25,
    email: "anna@example.com",
  };

  const productData = {
    name: "Продукт 1",
    price: 100,
    description: "Описание продукта 1",
  };

  // Состояние счетчика
  const [counter, setCounter] = React.useState(0);

  const handleCounterIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Примеры компонентов React</h1>

      {/* Пример использования компонента User */}
      <User name={userData.name} age={userData.age} />

      {/* Пример использования компонента List */}
      <List items={itemList} />

      {/* Пример использования компонента Person */}
      <Person {...personData} />

      {/* Пример использования компонента Product */}
      <Product {...productData} />

      {/* Пример использования компонента Counter */}
      <Counter count={counter} onIncrement={handleCounterIncrement} />
    </div>
  );
}

export default App;
