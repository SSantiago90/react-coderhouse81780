import { useState, useEffect } from "react";
import './Item.css';

function Item( props ) {
  const [state, setState] = useState("No agregado al carrito aún")
  
  // Tarea ejecutada en cada update/render
 // console.log("Renderizando...", props.title) 
 

  useEffect(
    () =>{      
        console.log("Obteniendo datos de la Base de Datos/API...🗂️")
    }, 
    []
  )
 
  useEffect(() => {
    // acceder al dom
    const botonDOM = document.getElementById("item-DOM")
    console.log(botonDOM)
  }, [])
  

  function agregarAlCarrito(){
    alert("Agregaste correctamente al carrito!");   
    setState(`Item agregado al carrito a la hora: ${ new Date().toUTCString()}` )
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
      <hr/>
      <p style={{ fontSize: "10px"}}>{props.description}</p>
      <button id="item-DOM" onClick={ agregarAlCarrito } >
        Agregar al carrito
      </button>
      <br/>
      <small>{state}</small>

    </div>
  )
}

export default Item;