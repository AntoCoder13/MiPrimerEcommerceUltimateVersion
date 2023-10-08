import Item from "../Item/Item";
import { toCapital } from "../helpers/toCapital";

const ItemList = ( {productos, product_name} ) => {

  return (
    <div className="container">
        <h2 className="main-title">{toCapital(product_name)}</h2>

        <div className="productos">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList