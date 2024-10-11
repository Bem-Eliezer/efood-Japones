import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  branco: '#fff',
  bege: '#FFEBD9',
  creme: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  }

  body {
  background-color: ${cores.creme};
  color: ${cores.vermelho};
  padding-bottom: 24px;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

  }
`
