//Link pa buscar un pokemon por nombre
//https://pokeapi.co/api/v2/pokemon/{pokeName}
//https://pokeapi.co/api/v2/pokemon/ditto

//Link pa buscar pokemons por Tipo
//https://pokeapi.co/api/v2/type/{pokeTYpe}
//https://pokeapi.co/api/v2/type/fire

import axios from 'axios';
import { useState , useEffect } from 'react';
import PokeCard from './PokeCard';


const PokeContainer = ( {pokeType} ) => {
    const [pokeArray, setPokeArray] = useState();

    const pokeTypeRequest = axios.create( {
        baseURL: `https://pokeapi.co/api/v2/type/${pokeType}`
    });
    

    useEffect(() => {
        pokeTypeRequest.get()
        .then(pokeData => {
            setPokeArray(pokeData.data.pokemon.slice(0,10))
        })
    }, [])

    return (
        <>
            <h2>Poke Container</h2>
            {pokeArray &&
                pokeArray.map((element) => {
                    return <PokeCard key= {element.pokemon.name} pokeUrl = {element.pokemon.url} />
                })
            }
        </>
    )
}
export default PokeContainer;