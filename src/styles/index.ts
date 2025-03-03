import { createGlobalStyle } from "styled-components";
// importação do estilo global do styled

// criação das regras para o estilo gobal chamando as configurações do styled
const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-fammily: "Roboto", sans-serif
    }
`

export default EstiloGlobal
// exportação do estilo global criado por nós