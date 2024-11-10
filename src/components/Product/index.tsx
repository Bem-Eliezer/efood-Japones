import { Link, useParams } from 'react-router-dom'

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
import { useEffect, useState } from 'react'
import { Pratos } from '../../pages/Home'

type Props = {
  title: string
  descricao: string
  saibaMais?: string | React.ReactNode
  image: string
  infos: string[]
  id: number
}

const Product = ({ title, descricao, saibaMais, image, infos, id }: Props) => {
  const { iD } = useParams()

  const [prato, setPrato] = useState<Pratos>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPratosDoDIa(res))
  }, [id])

  if (!prato) {
    return <h3>Carregando...</h3>
  }

  return (
    <Card to={`/produc/${iD}`}>
      <img src={prato.capa} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <TituloENota>
        <Titulo>{prato.titulo}</Titulo>
        <Nota>
          {prato.avaliacao}
          <Estrela>
            <img src={Estrelinha} alt="estrela" />
          </Estrela>
        </Nota>
      </TituloENota>
      <Descricao>{prato.descricao}</Descricao>
      <MaisInformacoes>
        <Link to={`/product/${iD}`}>
          <Tag size="small">
            <span>SaibaMais{prato.cardapio.id}</span>
          </Tag>
        </Link>
      </MaisInformacoes>
    </Card>
  )
}

export default Product
function setPratosDoDIa(res: any): any {
  throw new Error('Function not implemented.')
}
