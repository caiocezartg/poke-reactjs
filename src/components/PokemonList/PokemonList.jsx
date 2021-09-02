import React, { useEffect, useState } from 'react'
import PokemonTab from '../PokemonTab/PokemonTab';
import axios from 'axios';

import { Container } from './style';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokeData, setPokeData] = useState('https://pokeapi.co/api/v2/pokemon/')


    function createPokemon(data){
        data.forEach(async (pokemon) => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const data = await response.data;

            setPokemons((pokemons) => [...pokemons, data]);
        })
    }

    async function getAllPokemons(){
        const response = await axios.get(pokeData);
        const dataPokemon = await response.data;

        createPokemon(dataPokemon.results)
        setPokeData(dataPokemon.next)
    }


    useEffect(() => {
        getAllPokemons();
    }, [])

    return (
        <>
            <Container>
            {pokemons.sort((a, b) => a.id > b.id? 1 : -1).map((pokemon, index) => {
                return (
                <PokemonTab
                    key={index}
                    id={pokemon.id}
                    name={pokemon.name}
                    img={pokemon.sprites.other.dream_world.front_default}
                    type1={pokemon.types[0]}
                    type2={pokemon.types[1]}
                />
                )
            })}
            </Container>
            <button onClick={getAllPokemons}>Carregar mais</button>
        </>

    )
}

export default PokemonList
