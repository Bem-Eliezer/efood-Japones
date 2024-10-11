import Pratos from '../../models/Pratos'
import ProductList from '../../ProductsList'

import macarrao from '../../assets/images/maccarrao.png'
import suchi from '../../assets/images/suchi.png'

const pratosDoDia: Pratos[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    saibaMais: 'Saiba Mais',
    image: suchi,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    saibaMais: 'Saiba Mais',
    image: macarrao,
    infos: ['Italiana']
  },
  {
    id: 3,
    title: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    saibaMais: 'Saiba Mais',
    image: suchi,
    infos: ['Italiana']
  },
  {
    id: 4,
    title: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    saibaMais: 'Saiba Mais',
    image: macarrao,
    infos: ['Italiana']
  }
]

const Home = () => <ProductList pratos={pratosDoDia} background=" branco" />

export default Home
