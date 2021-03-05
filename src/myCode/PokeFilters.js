import axios from 'axios';
import { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PokeContainer from './PokeConteiner';

const PokeFilters = () => {
    const [typesArray, setTypesArray] = useState();
    const [selected, setSelected] = useState();
    const {register, handleSubmit} = useForm();

    const pokeTypes = axios.create( {
        baseURL: 'https://pokeapi.co/api/v2/type'
    });

    const typePick = (data) => {
        setSelected(data.pokeType)
    }
    const namePick = (data) => {
        setSelected(data.pokeName)
    }

    useEffect(() => {
        pokeTypes.get()
        .then(pokeData => {
            setTypesArray(pokeData.data.results);
            console.log(pokeData.data.results)
        })
    }, [])

    return (
        <>
            {typesArray &&
            <div>
                <form onSubmit={handleSubmit(typePick)} >
                    <label>
                        Search for Type:
                        <select ref={register} name="pokeType" >
                            <option value=""> none </option>
                            {
                                typesArray.map((element) => {
                                    return <option key={element.name}  value={element.name}> {element.name} </option>
                                })
                            }
                        </select>
                    </label>
                    <button type = "submit">I choose you</button>
                </form>
                <form onSubmit={handleSubmit(namePick)}>
                    <label>
                        Search for Name:
                        <input 
                            ref={register}
                            name="pokeName" 
                            placeholder="Write the name of pokemon">
                        </input>
                    </label>
                    <button type = "submit">I choose you</button>
                </form>
            </div>
            }
            {selected &&
            <PokeContainer pokeType={selected} />
            }
        </>
    )

}
export default PokeFilters;