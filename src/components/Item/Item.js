import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../../helpers/toCapital'

const Item = ( {producto} ) => {
  return (
    <div className="producto">
        <img src={producto.brand} alt={producto.product_name} />
        <div>
            <h4>{producto.product_name}</h4>
            <p>Precio: ${producto.price}</p>
            <p>Categoría: {toCapital(producto.category)}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item