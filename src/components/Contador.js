import { useState } from "react"

function Contador () { 
    const [numero,setNumero]=useState(0)
    const sumarNumero=()=>{

        setNumero(numero+1)

    }
    return(
    <div>
        <h1>Ejemplo useState</h1>
        <h2>contador: {numero}</h2>
        <button onClick={()=>sumarNumero()}>sumar 1</button>
        <button onClick={()=>{

            setNumero(numero-1)

        }}>restar 1</button>
    </div>)

 }
 export default Contador