import React from 'react';

function Product(props) {
  const { name, price, description } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>Цена: {price} руб.</p>
      <p>{description}</p>
    </div>
  );
}

export default Product;
