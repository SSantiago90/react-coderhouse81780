// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, query, where, addDoc, getFirestore } from "firebase/firestore";
import products from './products'
const firebaseConfig = {
  apiKey: "AIzaSyDh045Gh9Q4BKTNTbAqvmiyd60jDd37mKw",
  authDomain: "react-81780.firebaseapp.com",
  projectId: "react-81780",
  storageBucket: "react-81780.firebasestorage.app",
  messagingSenderId: "411912173923",
  appId: "1:411912173923:web:3163bd0b6902ec07213b56"
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

export async function createBuyOrder( orderData ){
  const buyer = { name: "Matias", email: "xXmati2002xX@hotmail.com", phone: "123123123"};
  const order = { 
    cart: orderData, 
    buyer,
    total: 9999,
    date: new Date(),
  }

  const ordersRef = collection(db, "orders");
  const newOrderDoc = await addDoc(ordersRef, order)
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
