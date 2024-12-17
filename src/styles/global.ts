import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body{
        background: ${({ theme }) => theme.color["base-background"]};
        color: ${({ theme }) => theme.color["base-text"]};
        -webkit-font-smoothing: antialiased;
        
    }

    body, input-security, textArea, button{

        font-family: 'Nunito', sans-serif;
        font-weight: 400;
    }
    
    button{
        border: none;
        cursor: pointer;
    }
`