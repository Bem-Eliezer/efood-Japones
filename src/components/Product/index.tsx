import { Link } from 'react-router-dom'

import Tag from '../Tag'
import Estrelinha from '../../assets/images/estrelinha.svg'

import {
  Card,
  Titulo,
  Descricao,
  Infos,
  MaisInformacoes,
  TituloENota,
  Nota,
  Estrela
} from './styles'

type Props = {
  title: string
  descricao: string
  saibaMais: string
  image: string
  infos: string[]
}

const Product = ({ title, descricao, saibaMais, image, infos }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TituloENota>
      <Titulo>Nome do prato</Titulo>
      <Nota>
        4.9
        <Estrela>
          <img src={Estrelinha} alt="estrela" />
        </Estrela>
      </Nota>
    </TituloENota>
    <Descricao>{descricao}</Descricao>
    <MaisInformacoes>
      <Link to="/HeaderPg2">
        <Tag size="small">{saibaMais}</Tag>
      </Link>
    </MaisInformacoes>
  </Card>
)

export default Product
