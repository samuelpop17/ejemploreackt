import SaludoHijo from "./SaludoHijo"
function SaludoPadre () { 


    const metodoPadre=(nombre)=>{

        console.log("ejecutando al padre "+nombre)

    }

    return(

        <div>

        <h1 style={{color:"red"}}>SALUDO PADRE</h1>
        <SaludoHijo metodoPadre={metodoPadre} idhijo="1"></SaludoHijo>
        <SaludoHijo metodoPadre={metodoPadre} idhijo="2"></SaludoHijo>
        <SaludoHijo metodoPadre={metodoPadre} idhijo="3"></SaludoHijo>
        </div>

    )

 }
 export default SaludoPadre