import styled from 'styled-components'

const colors = {
    bug: '#3B9950',
    dark: '#5A5979',
    dragon: '#61CAD9',
    electric: '#FDD853',
    fairy: '#EA1369',
    fighting: '#EF6138',
    fire: '#FD4C5A',
    flying: '#93B2C7',
    ghost: '#906790',
    grass: '#27CB4F',
    ground: '#6E491F',
    ice: '#D8F0FA',
    normal: '#CA98A7',
    poison: '#9B69D9',
    psychic: '#F81C91',
    rock: '#8B3E21',
    steel: '#42BD94',
    water: '#86A8FC',
}

export const Tab = styled.div`
    position: relative;
    background-color: ${(props => colors[props.typeColor])};
    text-align: center;

    margin: 20px 15px;
    padding: 15px 10px 30px 10px;
    flex: 0 0 calc(33.333% - 30px);
    
    overflow: hidden;
    border-radius: 1.6rem;

    @media (max-width: 768px) {
        flex: 0 0 calc(50% - 30px);
    }

    @media (max-width: 425px){
        flex: 0 0 calc(100% - 30px);
    }

    h4 {
        color: #fff;
        font-size: 1.125rem;
        margin-bottom: 0.625rem;
    }

    img {
        position: relative;
        max-width: 100%;
        width: 150px;
        height: 150px;
        display: block;
        margin: 0 auto;
        z-index: 2;
        
    }


    .iconBackground{
        position: absolute;
        max-width: 100%;
        width: 200px;
        height: 200px;
        left: -10%;
        bottom: -10%;
        z-index: 1;
        filter: opacity(0.3);
    }

    h3 {
        position: relative;
        color: #fff;
        font-size: 2rem;
        text-transform: capitalize;
        margin-bottom: 1.5rem;
        z-index: 2;
    }

    span {
        position: relative;
        color: #fff;
        margin-right: 0.825rem;
        padding: 0.5rem 0.825rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 0.625rem;
        background: ${(props => colors[props.typeColor])};
        filter: brightness(1.1);
        z-index: 2;
        text-transform: uppercase;
    }

    .secondType{
        background: ${(props => colors[props.typeSecondColor])};
        margin-right: 0;
    }
`;