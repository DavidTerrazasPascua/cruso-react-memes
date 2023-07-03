import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas/dist/html2canvas';

function App() {
   const [textoSuperior,setTextoSuperior]= useState("");
   const [textoInferior,setTextoInferior]= useState("");
   const [imagen ,setImagen]= useState("");
   const escribirTextoSuperior=(evento)=>{
      setTextoSuperior(evento.target.value);
   };
   
   const escribirTextoInferior=(evento)=>{
     setTextoInferior(evento.target.value)
   }
  
    const imagenSeleccionada= (e)=>{
         setImagen(e.target.value)
    }
 const exportarImagen=()=>{
  html2canvas(document.querySelector("#meme")).then(function(canvas) {
    let img    = canvas.toDataURL("image/png");
    let link= document.createElement('a');
    link.download='meme.png';
    link.href=img;
    link.click();
});
 }

  return (
    <div className="App">
        <select onChange={imagenSeleccionada}>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select><br/>
     <input onChange={escribirTextoSuperior} type="text" placeholder='Texto Superior' /><br/>
     <input onChange={escribirTextoInferior} type="text" placeholder='Texto Inferior' /><br/>
     <button onClick={exportarImagen}>Exportar</button>
     <div className='meme' id="meme">
      <span>{textoSuperior}</span><br/>
      <span>{textoInferior}</span>
      <img src={"/img/"+imagen+".jpg"} alt={imagen+" meme"} />
     </div>
    </div>
  );
}

export default App;
