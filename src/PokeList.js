import React from 'react';

const Pokelist = ({ pokedata,}) =>{
    
    return  (
    <div className="app">
     {pokedata.map((pok, index) => (
        <div key={index} className="card">
      <img src={pok.imgUrl} alt="pok" />
      <h1>{pok.name[0].toUpperCase() + pok.name.slice(1)}</h1>
      <p>Type: <b>{pok.type}</b></p>
         </div>
     ))}
    </div> 
    )     
}

export default Pokelist;