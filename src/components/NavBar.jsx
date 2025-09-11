import CartWidget from "./CartWidget"

function NavBar(){
  return (
    <nav>
      <ul>
        <li>
          Home
        </li>
        <li>
          Tienda
        </li>
        <li>
          Remeras
        </li>
        <li>
          Zapatillas
        </li>
      </ul>
     
      <span><CartWidget/></span>
    </nav>
  )
}

export default NavBar