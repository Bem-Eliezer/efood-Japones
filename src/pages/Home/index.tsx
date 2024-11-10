import ProductList from '../../ProductsList'

import { useEffect, useState } from 'react'

export type Pratos = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

export const Home = () => {
  const [pratosDoDia, setPratosDoDIa] = useState<Pratos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPratosDoDIa(res))
  }, [])

  return <ProductList pratos={pratosDoDia} background=" branco" />
}

export default Home
