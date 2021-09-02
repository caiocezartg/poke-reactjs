import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     }

     body {
         width: 100%;
         height: 100vh;
         font-family: 'Roboto', Arial, sans-serif;

         display: flex;
         flex-wrap: wrap;

        justify-content: center;
        align-items: center;
     }

     html { 
        @media (max-width: 1080px) {
            font-size: 93.75% // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }

     button {
         cursor: pointer;
         display: block;
         margin: 2.5rem auto;
         padding: 1.5rem 0;
         width: 50%;
         border: none;
         text-transform: uppercase;
         background-color: #E84460;
         color: #fff;
         border-radius: 0.625rem;
         font-weight: 700;
         font-size: 1.2rem;
         transition: filter 0.3s linear;

         &:hover{
             filter: brightness(0.8);
         }
     }
`;