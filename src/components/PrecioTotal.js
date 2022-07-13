import React from 'react';


export default function PrecioTotal(props) {

    let precio = props.totalPrice()

    return (
      <div >
        Preu: {precio} €
    </div>
     
    )
}