import { Descricao } from '../Product/styles'
import Tag from '../Tag'

import Esfiha from '../../assets/images/esfiha.png'
import { Adicionar, Card2, Titulo } from './styles'

const ProductPg2 = () => (
  <Card2>
    <img src={Esfiha} alt="esfiha" />
    <Titulo>Pizza Marguerita</Titulo>
    <Descricao>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Descricao>
    <Adicionar>adicionar ao carrinho</Adicionar>
  </Card2>
)

export default ProductPg2
