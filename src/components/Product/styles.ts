import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.branco};
  margin-bottom: 48px;
  position: relative;
  text-decoration: none;
  display: block;
  color: ${cores.vermelho};

  } ${TagContainer} {
    margin-right: 8px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 16px;
  padding-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display; block;
  margin-top: 16px;
  padding-left: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const MaisInformacoes = styled.div`
  padding-left: 8px;
  padding-bottom: 8px;
  padding-top: 16px;
`

export const TituloENota = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Nota = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 16px;
  padding-right: 8px;
`
export const Estrela = styled.div`
  width: 21px;
  height: 21px;
  margin-left: 8px;
`
