import Item from '../Item/Item';
import { getProducts, getProductByCategory  } from '../../data/firestore';

import { useEffect, useState } from 'react';
import './ItemListContainer.css'
import { useParams } from 'react-router';
function ItemListContainer( props ){  
  const [products, setProducts] = useState([]);
  const { categParam } = useParams();

  useEffect( () =>{
    if (categParam){
      const promesaDatos = getProductByCategory(categParam);      
      promesaDatos.then( (respuesta) => {
      setProducts(respuesta)
    })
    }
    else {
      const promesaDatos = getProducts();
      promesaDatos.then( (respuesta) => {
      setProducts(respuesta)
    })
    }
  }, [categParam])
  
  
  return (
    <section className="item-list-container">
      <h2>{props.greeting}</h2>
      <div>
        {
         products.length === 0 ? 
          <p className="item-list-container__loading">Cargando...</p>
         : 
           <></>
        }

          <div>
            <h4>Nuestros productos</h4>   
          <div className="item-list">
            { products.map(item =>  <Item {...item} key={item.id}  /> )}
          </div>
          </div>     
      </div>
    </section>
    
  )
}

export default ItemListContainer;