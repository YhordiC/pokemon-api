//Hooks:
import { useState, useEffect } from "react";
//components
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Audio } from "./components/Audio";
//Icons
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
//styles
import "./App.scss";

function App() {
  const [idpokemon, setIdPokemon] = useState(1);
  const [pokemonEvolucion, setPokemonEvolucion] = useState([]);
  
  
console.log()
  useEffect(() => {
    searchPokemon(idpokemon);
  }, [idpokemon]);

  let searchPokemon = async (pokemonNumber) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${pokemonNumber}/`
    );
    const data = await response.json();
    console.log(data);
    let pokemonEvoArray = [];

    

    if(data.id === 67){
      let pokemonlv1 = data.chain.species.name;
    let imgPokemonlv1 = await getPokemonImg(pokemonlv1);
      pokemonEvoArray.push([pokemonlv1, imgPokemonlv1]);
          
       
        for(let i=0; i<2; i++){
          let pokemonLevel= data.chain.evolves_to[i].species.name;
        let pokemonImg = await getPokemonImg(pokemonLevel);
        pokemonEvoArray.push([pokemonLevel,pokemonImg]);
        }
      
     
      setPokemonEvolucion(pokemonEvoArray);
       
    }
    else{
      let pokemonlv1 = data.chain.species.name;
   
      let imgPokemonlv1 = await getPokemonImg(pokemonlv1);
      pokemonEvoArray.push([pokemonlv1, imgPokemonlv1]);

      if (data.chain.evolves_to.length !== 0) {
        let pokemonLV2 = data.chain.evolves_to[0].species.name;
        let pokemonimgLV2 = await getPokemonImg(pokemonLV2);
        pokemonEvoArray.push([pokemonLV2, pokemonimgLV2]);
  
        if (data.chain.evolves_to[0].evolves_to.length !== 0) {
          let pokemonLV3 = data.chain.evolves_to[0].evolves_to[0].species.name;
          let imgpokemonLV3 = await getPokemonImg(pokemonLV3);
          pokemonEvoArray.push([pokemonLV3, imgpokemonLV3]);
  
          console.log(pokemonEvolucion);
          console.log(pokemonEvoArray);
        }
        
      }
      setPokemonEvolucion(pokemonEvoArray);
     
    };
    
    }

    

  let getPokemonImg = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();
    return data.sprites.other["official-artwork"].front_default;
  };
  function NextPokemon() {
    setIdPokemon(idpokemon + 1);
  }

  function AtrasPokemon() {
    idpokemon === 1
      ? console.log("No menores a 1")
      : setIdPokemon(idpokemon - 1);
  }

  

  return (
    <div className="App">
      <Audio />
      <div className={`container-card card${pokemonEvolucion.length}` } >
        {pokemonEvolucion.map((pokemon) => (
          <Card key={pokemon[0]} nombre={pokemon[0]} imagen={pokemon[1]} />
        ))}
      </div>
      <div className="container-btn">
        <Button iconContent={<FiArrowLeft />} funcion={AtrasPokemon} />
        <Button iconContent={<FiArrowRight />} funcion={NextPokemon} />
      </div>
    </div>
  );
}

export default App;
