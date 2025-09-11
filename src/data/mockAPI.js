import products from './products'
// simular una promesa que devuelve los productos
function getProducts(){
  return new Promise(
    (resolve) => {
      setTimeout( () => { resolve(products)}, 3000)
    }
  );
}

export default getProducts;