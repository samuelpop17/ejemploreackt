function SumarNumeros () { 
    var resultado=0
    const sumando =(numero)=>{

     
        console.log("ahora mismo tenemos: "+resultado)
         
         var suma=resultado +numero
            resultado=suma
         console.log("lo hemos sumado u ahoratenemso: "+resultado)

    }

    return(

        <div>

        <button onClick={()=>sumando(2)}>sumas 2</button>
        <button onClick={()=>sumando(1)}>sumas 1</button>

        </div>

    )

 }

 export default SumarNumeros;