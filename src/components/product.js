import React from "react";

function sortProductsByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}

function sortProductsByName(products) {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
}

function Product({id, name, price, description}) {
    return (
        <div className="product">
            <h1>ID: {id}</h1>
            <h2>{name}</h2>
            <p>Цена: {price} руб.</p>
            <p>Описание: {description}</p>
        </div>
    );
}

export {Product, sortProductsByPrice, sortProductsByName};