import { createContext, useState } from "react";

const cartContext = createContext(null);

// Custom Provider -> value
// CRUD -> Create/read/update/delete
export function CartContextProvider(props){
  const [cartItems, setCartItems] = useState([]);
  
  function addToCart(newItem){
    const newCart = structuredClone(cartItems);

    const isInCart = newCart.some( item => item.id === newItem.id )
    if (isInCart){
      // YA está en cart -> actualizar la cantidad de unidades compradas
      const index = newCart.findIndex( item => item.id === newItem.id )
      const updateItem = newCart[index];
      updateItem.count++      
    }
    else {
      newItem.count = 1;
      newCart.push(newItem);
    }

    setCartItems(newCart)
  }

  function countItems(){
    let quantity = 0;
    cartItems.forEach( item => quantity += item.count)
    return quantity
  }

  // Remover un item del context
  function removeItem( idDelete ){
    const newCart = structuredClone(cartItems);
    const newCartWithDelete = newCart.filter( item => item.id !== idDelete )
    setCartItems(newCartWithDelete)
  }
  
  return <cartContext.Provider value={ 
    {cart: cartItems, 
    addToCart, 
    countItems, 
    removeItem}
  }>
      { props.children }
    </cartContext.Provider>
}

export default cartContext;