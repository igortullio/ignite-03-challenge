import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${theme.colors.blue};
    }

    body {
      background: ${theme.colors.background};
      color: ${theme.colors.text};
      -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button,
    h1,
    h2,
    h3 {
      color: ${theme.colors.text};
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weights.regular};
      font-size: ${theme.font.sizes[3]};
      line-height: ${theme.font.heights.extended};
    }
  `}
  
`
