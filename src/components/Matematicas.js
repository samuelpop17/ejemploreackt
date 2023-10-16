import PadreMatematicas from "./PadreMatematicas";

function Matematicas(props) {
    var numero=props.numero
    const dobleNumero=(numero)=>{
        var doble=numero*2
        console.log("el doble de "+numero+" es igual a: "+doble)

    }
  return (
    <div>
      <button onClick={()=>dobleNumero(numero)}>Doble</button>
      <PadreMatematicas num={numero}></PadreMatematicas>
    </div>
  );
}
export default Matematicas;
