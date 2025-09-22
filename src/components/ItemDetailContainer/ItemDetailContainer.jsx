import { useEffect, useState } from "react";
import { getProductById } from "../../data/mockAPI";
import { useParams } from "react-router"
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
  const { idParam } = useParams();  
  const [ item, setItem] = useState(null)

  useEffect( () => {
      getProductById(idParam).then( res => setItem(res)); 
  }, [])

  
  return (
     <div className="item-detail">      
     {
      item 
      ?  <div>
        <h2 className="item-detail-title">{item.title}</h2>

        <div className="item-detail-content">
          <img  
            className="item-detail-img"            
            src={item.imgURL}
            alt={item.title}
            /> 
            <div>
              <p className="item-detail-description">{item.description}</p>
              <h3 className="item-detail-price">Precio: $ {item.price}</h3>
              <button>Agregar al carrito</button>
            </div>
        </div>
        </div>
      :
      <p>Cargando...</p>
     
      }
      </div>
  )
}