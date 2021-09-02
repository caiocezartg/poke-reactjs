import Header from "./components/Header/Header";
import PokemonList from "./components/PokemonList/PokemonList";
import { GlobalStyle } from "./global/styles";

export function App() {
    return (
      <>
        <Header />
        <PokemonList />
        <GlobalStyle />
      </>
    )
}
