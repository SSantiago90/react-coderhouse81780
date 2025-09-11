import Item from './Item';
import getProducts from '../data/mockAPI'
import { useEffect, useState } from 'react';

function ItemListContainer( props ){  
  const [products, setProducts] = useState([]);

  console.log("Renderizando ILC💓")

  useEffect( () =>{
    const promesaDatos = getProducts();
    promesaDatos.then( (respuesta) => {
    setProducts(respuesta)
  } )
  }, []);
  
  
  return (
  <section>
    <h2>    {props.greeting}  </h2>
    <div>
       {
        products.map( product => <Item 
          key={product.id}
          title={product.title} 
          price={product.price}
          imgURL={product.imgURL}
          stock={product.stock}
          description={product.description}
        /> )
      }       
    </div>
  </section>
    
  )
}

/* {
    id: 1,
    title: "Auriculares Inalámbricos",
    price: 59.99,
    imgURL: "https://ejemplo.com/auriculares.jpg",
    stock: 25,
    category: "Electrónica",
    description: "Auriculares con cancelación de ruido y 20 horas de batería. Ideales para música y llamadas."
  }, */

export default ItemListContainer;