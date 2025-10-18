// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, query, where, addDoc, getFirestore } from "firebase/firestore";
import products from './products'

// ? Credentials / secrets / env variables / keys
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
  authDomain: "react-81780.firebaseapp.com",
  projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,
  storageBucket: "react-81780.firebasestorage.app",
  messagingSenderId: "411912173923",
  appId: import.meta.env.VITE_FIRESTORE_APP_ID,
};

// 1. Inicializar el servicio   
const app = initializeApp(firebaseConfig);

// 2. Inicializamos la base de datos -> Firestore
const db = getFirestore(app);

// 3. Creamos la funcionalidad
// 3.1 -> getProducts

//  ASYNC/AWAIT
// async -> function que retorna una promesa
export async function getProducts(){
  const productsRef = collection(db, "products")
  const documentsSnapshot = await getDocs(productsRef)
  const documents = documentsSnapshot.docs

  const data = documents.map( doc =>  { 
      return { id: doc.id, ...doc.data()}
    })  
  
  return data;  
}


// 3.2 -> getProductById
export async function getProductById(idParam){
  const documentRef = doc(db, "products", idParam)
  const documentSnapshot = await getDoc(documentRef)
  const docData = documentSnapshot.data()
  return {id: documentSnapshot.id, ...docData }
}

// 3.3 -> getProductByCategory
export async function getProductByCategory(categParam){
  const productsRef = collection(db, "products")
  const q = query(productsRef, where("category", "==",categParam))

  const documentsSnapshot = await getDocs(q)
  const documents = documentsSnapshot.docs

  const data = documents.map( doc =>  { 
      return { id: doc.id, ...doc.data()}
    })  
  
  return data;    

}

/**
 * Crea una orden de compra en firestore.
 * @param {object} orderData - { buyer, cart, date, total}
 */
export async function createBuyOrder( orderData ){ 

  const ordersRef = collection(db, "orders");
  const newOrderDoc = await addDoc(ordersRef, orderData)
  return newOrderDoc;
}






export async function exportProductsToFirestore(){
  //* iterar el array de products -> doc en firestore
  // for ... of... 
  for(let item of products){
    delete item.id;
    const idDoc = await addDoc( collection(db, "products"), item)
    console.log("Creado documento:", idDoc)
  }
}


export default app;
