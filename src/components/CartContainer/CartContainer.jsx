import { useContext } from "react"
import cartContext from "../../context/cartContext"
import { createBuyOrder } from "../../data/firestore";


function CartContainer(){
  const { cart, removeItem } = useContext(cartContext);

  async function handlePayment(){
    const orderDocument = await createBuyOrder(cart)
    console.log(orderDocument)
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
      <hr/>
      <div>
        <h3>Total de tu Compra: $ 999</h3>
      </div>
      <div>
        <button onClick={handlePayment}>Pagar</button>
      </div>
    </section>
  )
}

export default CartContainer