import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [product_name, setProduct_name] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {

      const productosRef = collection(db, "productos");
      const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

      getDocs(q)
        .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [categoria])
    
  return (
    <div>
        <ItemList productos={productos} product_name={product_name} />
    </div>
  )
}

export default ItemListContainer