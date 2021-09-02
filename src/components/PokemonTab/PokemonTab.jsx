import React from 'react'
import { Tab } from './style'

import PokeImg from '../../assets/pokesymbol.png'

const PokemonTab = ({id, name, img, type1, type2}) => {
    return (
        <Tab typeColor={type1.type.name} typeSecondColor={type2 && type2.type.name}>
            {id < 10 ? <h4>#00{id}</h4> : <h4>#0{id}</h4>}
            <img src={img} alt="Imagem Pokémon" />
            <h3>{name}</h3>
            <span>{type1.type.name}</span>
            {type2 ? <span className="secondType">{type2.type.name}</span> : null }

            <img src={PokeImg} alt="Pokemon" className="iconBackground" />
        </Tab>
    )
}

export default PokemonTab
