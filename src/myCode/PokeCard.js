import {useState, useEffect} from 'react';
import axios from 'axios';

const PokeCard = ( {pokeUrl} ) => {
    const [pokemon, setPokemon] = useState();
    const [pokeTypes, setPokeTypes] = useState();
    const [pokeStats, setPokeStats] = useState();
    
    const pokeRequest = axios.create( {
        baseURL: pokeUrl
    });

    const listStats = () => {
        
    }

    useEffect(() => {
        pokeRequest.get()
        .then(pokeInfo => {
            setPokemon(pokeInfo.data);
            setPokeTypes(pokeInfo.data.types);
            setPokeStats(pokeInfo.data.stats);
            console.log(pokeInfo)
        })
    }, [])

    return (
        <>
        {pokemon &&
            <div>
                <h2> {pokemon.name} </h2>
                {pokeTypes && 
                <div>
                    {pokeTypes.map((value) => {
                        return <span key={value.index}> {value.type.name} </span>
                    })}
                </div>
                }
                <img src={pokemon.sprites.front_default}/>
                {pokeStats &&
                <div>
                    {pokeStats.map((value) => {
                        return <div>
                            <span>{value.stat.name} : </span>
                            <span>{value.base_stat}</span>
                        </div>
                    })}
                </div>
                }
            </div>
        }
        </>
    )
}
export default PokeCard;
