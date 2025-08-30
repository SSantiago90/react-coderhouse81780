import { useState } from "react";
import './Item.css';

function Item( props ) {
  /* SIN ESTADO😢 */
  /* let stateCart = "No agregado al carrito"; */

  /*  CON ESTADO💓 */
  const [state, setState] = useState("No agregado al carrito aún")
  

  console.log(state);
  
  function agregarAlCarrito(){
    //state = "texto nuevo" -> MAL
    alert("Agregaste correctamente al carrito!");
    
    // Imprimamos/rendericemos algo nuevo
    setState("Item agregado al carrito")
  }
  
  return (
    <div className="item-card">
      <h3 className="item-title">{props.title}</h3>
      <img height="200" src={props.imgURL} alt="img-product"></img>
      <p>Precio 
          <span>
              $ { props.price }
          </span>
      </p>
      {/* Eventos -> camelCase */} 
      <button onClick={ agregarAlCarrito } >
        Agregar al carrito
      </button>
      <br/>
      <small>{state}</small>

    </div>
  )
}

export default Item;