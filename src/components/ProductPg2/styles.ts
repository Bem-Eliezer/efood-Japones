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
  background-color: ${cores.bege};
  height: 24px;
  border: none;
  margin-right: 8px;
`
