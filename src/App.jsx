import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'


function App() {  
  return (
    <BrowserRouter>    
    <main className="container">
      <NavBar/>     
      <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer greeting="Bienvenidos a la tienda"/>} 
          />
        <Route 
          path="/category/:categParam"
          element={<ItemListContainer greeting="Categorías de productos"/>}
          />
        <Route
         path="/detail/:idParam"
         element={<ItemDetailContainer/>}
         />
         <Route
          path="*"
          element={<h1>Oops! No encontramos está página</h1>}
          />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
