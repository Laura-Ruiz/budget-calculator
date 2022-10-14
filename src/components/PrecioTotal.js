import React from "react";

export default function PrecioTotal(props) {
  let precio = props.totalPrice();

  return <h3 id="price">Precio total: {precio} €</h3>;
}
