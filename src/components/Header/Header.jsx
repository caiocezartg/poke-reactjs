import React from 'react'
import HeaderImg from '../../assets/header.png'
import { HeaderImage } from './style'


const Header = () => {
    return (
        <HeaderImage>
            <img src={ HeaderImg } alt="Pokemon Gallery" />
        </HeaderImage>
    )
}

export default Header
