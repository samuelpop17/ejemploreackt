function SaludoHijo (props) { 
    var ejecutarPadre=props.metodoPadre;
    var idhijo=props.idhijo;
    return(

        <div>

        <h1 style={{color:"blue"}}>SALUDO hijo</h1>
        <button onClick={()=>ejecutarPadre('franco '+idhijo)}>llamar padre</button>
        </div>

    )

 }
 export default SaludoHijo