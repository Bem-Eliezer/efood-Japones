import styled from 'styled-components'
import { cores } from '../../styles'

export const Card2 = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  margin-top: 56px;
  margin-bottom: 32px;
  padding: 8px;

   img {
    max-width: 100%;
    max-height: 100%;
`
export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 8px;
  line-height: 19px;
`

export const Adicionar = styled.button`
  width: 100%;
  color: ${cores.vermelho};
  background-color: ${cores.bege};
  height: 24px;
  border: none;
  margin-right: 8px;
  font-weight: bold;
  cursor: pointer;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  &.visivel {
    display: flex;
  }

  .container {
    max-width: 1024px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const Imagem = styled.div`
  width: 100%;
  height: 344px;
  margin-top: 490px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  position: relative;
  z-index: 1;

  .esfiha {
    width: 280px;
    height: 280px;
    margin-left: 32px;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  .fechar {
    width: 16px;
    height: 16px;
    margin: 8px;
    cursor: pointer;
  }
`

export const Titulo2 = styled.h3`
  color: ${cores.branco};
  font-size: 18px;
  font-weight: 900px;
  align-itens: center;
  margin-bottom: 16px;
  margin-top: 32px;
`
export const Paragrafo = styled.p`
  color: ${cores.branco};
  font-size: 14px;
`
export const Adicionar2 = styled.button`
  width: 218px;
  height: 24px;
  color: ${cores.vermelho};
  font-weight: bold;
  background-color: ${cores.bege};
  border: none;
  margin-bottom: 63px;
  margin-top: 20px;
`

export const Div = styled.div`
  display: block;
  height: 176px;
  margin-right: 32px;
  margin-left: 24px;
`
