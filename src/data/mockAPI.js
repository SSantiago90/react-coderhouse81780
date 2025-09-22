import products from './products'
function getProducts(){
  return new Promise(
    (resolve) => {
      setTimeout( () => { 
        console.log("Devolviendo productos desde API...");
        resolve(products)}, 1000)
    }
  );
}

export function getProductById(idParam){
  const requestProduct = products.find( product =>  product.id === Number(idParam) )
  
    const promiseProduct = new Promise( (resolve) => {
      setTimeout( () => {
        console.log("devolviendo datos...")
        resolve(requestProduct)
      }, 1000 )
  })
  return promiseProduct;
}

export function getProductByCategory( categParam){
   const requestCategory = products.filter( product => product.category === categParam )    

    const promiseProduct = new Promise( (resolve) => {
      setTimeout( () => {
        console.log("devolviendo datos...")
        resolve(requestCategory)
      }, 1000 )
  })
  return promiseProduct;
}

export default getProducts;