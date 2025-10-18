import { useState } from "react";

export default function FormCheckout( { handleCheckout }){
  const [formData, setFormData] = useState(
    { username: "", mail: "", phone: "" }
  );

  function handleSubmit(event){
    event.preventDefault();  
    handleCheckout(formData)
  }

  function handleInputChange(event){
    const value = event.target.value;
    const inputName = event.target.name;
    
    console.log("handler del input", inputName, value)   
    // formData.username = "santiago"
    // formData[inputName] = value
    const newFormData = {...formData};
    newFormData[inputName] = value;
    // newFormData[event.target.name] = event.target.value;
    setFormData(newFormData)
  }

  function handleReset(){
    setFormData({ username: "", mail: "", phone: "" })
  }

  // * Controlled Component / Controlled Form 
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:
            <input 
            onChange={handleInputChange}
            name="username" 
            placeholder="Santiago..."
            type="text"
            value={formData.username}
            />
          </label>
            <label>Email:
            <input 
            onChange={handleInputChange} 
            name="mail" 
            placeholder="mail@mail.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            type="email"
            value={formData.mail}
            />
          </label>
            <label>Teléfono"
            <input a
            onChange={handleInputChange} 
            name="phone" 
            placeholder="11 123123123"
            type="tel"
            value={formData.phone}
            />
            
          </label>
        </div>
        <button type="submit">Enviar</button>
        <button onClick={handleReset} type="button">Reset form</button>
      </form>
  )
}
