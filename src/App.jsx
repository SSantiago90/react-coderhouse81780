import './App.css'
import Item from './components/Item'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import StateHook from './components/StateHook'

function App() {  
  return (
    <>
      {/* Componentes para entrega */}
      <NavBar></NavBar>
      <ItemListContainer greeting="Hola usuario"/>
      {/* Codigo de ejemplos vistos en clase */}
      <hr/>
      <br/>

      <div>      
      <h1>Hola mundo</h1>    
      <h2>Hola Coderhouse</h2>
      <small>Esta es mi app de React</small>
      <hr/>
        <h2>Componente de Estado</h2>
        <StateHook />
      <hr/>
      
      <Item 
        title="Zapatilla - Lona Roja" 
        price={ 1500 } 
        imgURL="https://acdn-us.mitiendanube.com/stores/001/702/486/products/zz37300a-141-7bc1a1b2681a2af80616777787737082-1024-1024.jpg"
      />
      <Item 
        title="Air Jordan III"
        price={ 5000.55}
        imgURL="https://www.digitalsport.com.ar/files/products/614a45eb54a5c-542247-1200x1200.jpg"
      />
      <Item 
        title="Placeholder item"
        price={ 111}
        imgURL="https://www.digitalsport.com.ar/files/products/614a45eb54a5c-542247-1200x1200.jpg"
      />     

    </div>
    </>
  )
}

export default App
