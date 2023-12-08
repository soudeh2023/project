
import React from 'react';

const PageProduct  = ({ id, name, price, addToCart }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{price} €</p>
      <button onClick={() => addToCart({ id, name, price })}>In den Warenkorb</button>
    </div>
  );
};

export default PageProduct ;
