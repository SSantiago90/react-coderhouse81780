import { useContext } from "react"
import cartContext from "../../context/cartContext"
import { createBuyOrder } from "../../data/firestore";
import FormCheckout from "./FormCheckout";


function CartContainer(){
  const { cart, clearCart, removeItem } = useContext(cartContext); 

  async function handleCheckout(formData){
    const buyOrder = {
      buyer: formData,
      cart: cart,
      date: new Date(),
      total: 9999
    }

    const orderDocument = await createBuyOrder(buyOrder)
    console.log(orderDocument)
    clearCart();
    alert(`Hiciste tu compra! - el ID de tu compra es: ${orderDocument.id}`)
  }

  // renderizado condicional
  if ( cart.length === 0 ){
    return (
    <div>
      <h2>Tu carrito está vacío</h2>
      <button>Volveral inicio</button>
    </div>
    )
  }
  

  return(
    <section>
      <h2>Tu carrito de compras</h2>
      <div>
        <ul>
          {
            cart.map( itemInCart => <div>
              <h4>{itemInCart.title}</h4>
              <p>Price: {itemInCart.price}</p>
              <p>Quantity: {itemInCart.count} </p>
              <button onClick={ () => removeItem(itemInCart.id) }>🗑️</button>
            </div>)
          }
        </ul>
        <button>Vaciar carrito</button>
      </div>
      <hr/>
      <div>
        <h3>Total de tu Compra: $ 999</h3>
      </div>
      <div>
        <FormCheckout handleCheckout={handleCheckout} />
      </div>
    </section>
  )
}

export default CartContainer