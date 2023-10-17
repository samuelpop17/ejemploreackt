import { useState } from "react";
function Car(props) {
  const [estado, setEstado] = useState(false);

  const [velocidad, setVelocidad] = useState(0);

  var coche = {
    marca: props.marca,
    modelo: props.modelo,
    aceleracion: parseInt(props.aceleracion),
    velocidadMaxima: parseInt(props.velocidadMaxima),
  };

  const comprobarEstado = () => {
    if (estado == true) {
      return <h1 style={{ color: "green" }}>Arrancado</h1>;
    } else {
      return <h1 style={{ color: "red" }}>Detenido</h1>;
    }
  }
    const aceleraCoche = () => {
      if (estado == false) {
        alert("EL COCHE ESTA DETENIDO");
        setVelocidad(0);
      } else {
        if (velocidad >= coche.velocidadMaxima) {
            setVelocidad(coche.velocidadMaxima)
        }else{
            setVelocidad(velocidad+coche.aceleracion)
        }
      }
    };
  

  return (
    <div>
      <h1 style={{ color: "red" }}>
        componenete car: {coche.marca},{coche.modelo}
      </h1>
      <h1 style={{ color: "blue" }}>velociad actual:{velocidad}</h1>

      <div>{comprobarEstado()}</div>

      <button
        onClick={() => {
          setEstado(!estado);
          console.log("cambaindo estado " + estado);
        }}
      >
        arrancar/detener
      </button>
      <button  onClick={()=>{

        aceleraCoche()

      }}>Acelerar</button>
    </div>
  );
}
export default Car;
