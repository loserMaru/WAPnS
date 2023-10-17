import React from "react";

function sortProductsByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}

function sortProductsByName(products) {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
}

function Product({id, name, ...props}) {
    return (
        <div className="product">
            <h1>ID: {id}</h1>
            <h2>{name}</h2>
            <p>Цена: {props.price} руб.</p>
            <p>Описание: {props.description}</p>
        </div>
    );
}

export {Product, sortProductsByPrice, sortProductsByName};