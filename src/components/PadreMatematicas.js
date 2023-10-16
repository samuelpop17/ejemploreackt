function PadreMatematicas(props) {

    var num=props.num
    const tripleNumero=(num)=>{
        var triple=num*3
        console.log("el triple de "+num+" es igual a: "+triple)

    }
    return (
      <div>
        
        <button onClick={()=>tripleNumero(num)}>Triple</button>
        
      </div>
    );
  }
  export default PadreMatematicas;