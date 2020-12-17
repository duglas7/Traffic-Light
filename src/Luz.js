import React, {useState} from 'react';

const Luz = () => {
  const [rojoEncendido, setRojoEncendido] = useState("");
  const [amarilloEncendido, setAmarilloEncendido] = useState("");
  const [verdeEncendido, setVerdeEncendido] = useState("");

  return (
    <>
      <div className="barra">
        <div className="background">
          <div className="box-out">
            <div className="box-inside">
              <div className={"circulo rojo " + rojoEncendido} onClick ={() => (setRojoEncendido("encendido"), setAmarilloEncendido(""), setVerdeEncendido(""))}></div>
              <div className={"circulo amarillo " + amarilloEncendido} onClick ={() => (setRojoEncendido(""), setAmarilloEncendido("encendido"), setVerdeEncendido(""))}></div>
              <div className={"circulo verde " + verdeEncendido} onClick ={() => (setRojoEncendido(""), setAmarilloEncendido(""), setVerdeEncendido("encendido"))}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Luz;

/* 
<div className={"circulo color1" + redlight}  onClick={() => (setRedlight("light"), setYellowlight(""), setGreenlight(""))}></div>
<div className={"circulo color2" + yellowlight} onClick={() => (setRedlight(""), setYellowlight("light"), setGreenlight(""))}></div>
<div className={"circulo color3" + greenlight } onClick={() => (setRedlight(""), setYellowlight(""), setGreenlight("light"))}></div> */