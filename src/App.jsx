import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import StateHook from './components/StateHook'

function App() {  
  return (
    <>    
      <NavBar/>     
      <ItemListContainer greeting="Hola usuario"/>   
     
      <div>     
        <hr/>
        <h2>Clase 2</h2>      
          <h2>Componente de Estado</h2>
          <StateHook />
      </div>
    </>
  )
}

export default App
