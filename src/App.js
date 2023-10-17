import React, { useState } from "react";
import User from "./components/user";
import List from "./components/list";
import Person from "./components/person";
import { Product, sortProductsByName, sortProductsByPrice } from "./components/product";
import Counter from "./components/counter";

function App() {
    // Данные для компонентов
    const userData = {
        name: "Иван Иванов",
        age: 20,
    };

    const itemList = [
        { name: "Андрей", age: 21 },
        { name: "Степан", age: 55 },
        { name: "Игорь", age: 30 },
        { name: "Артем", age: 5 },
    ];

    const personData = {
        name: "Иван Иванов",
        age: 30,
        email: "ivan@example.com",
    };

    const productData = [
        {
            id: "1",
            name: "Апельсин",
            price: 80,
            description: "Оранжевый апельсин",
        },
        {
            id: "2",
            name: "Помидор",
            price: 20,
            description: "Красный помидор",
        },
        {
            id: "3",
            name: "Банан",
            price: 50,
            description: "Желтый банан",
        },
    ];

    // Состояние для списка продуктов
    const [sortedProducts, setSortedProducts] = useState(productData);

    // Функция для сортировки по цене
    const handleSortByPrice = () => {
        const sortedByPrice = sortProductsByPrice([...sortedProducts]);
        setSortedProducts(sortedByPrice);
    };

    // Функция для сортировки по названию
    const handleSortByName = () => {
        const sortedByName = sortProductsByName([...sortedProducts]);
        setSortedProducts(sortedByName);
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

            {/* Кнопки для сортировки продуктов */}
            <button onClick={handleSortByPrice}>Сортировать по цене</button>
            <button onClick={handleSortByName}>Сортировать по названию</button>

            {/* Пример использования компонента Product */}
            {sortedProducts.map((product) => (
                <Product id={product.id} name={product.name} description={product.description} price={product.price} />
            ))}

            {/* Пример использования компонента Counter */}
            <Counter count={counter} onIncrement={handleCounterIncrement} />
        </div>
    );
}

export default App;
