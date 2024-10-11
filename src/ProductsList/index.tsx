import Product from '../components/Product'
import Pratos from '../models/Pratos'

import { Container, List } from './styles'

type Props = {
  background: ' branco'
  pratos: Pratos[]
}

const ProductList = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <Product
            key={prato.id}
            descricao={prato.descricao}
            image={prato.image}
            title={prato.title}
            saibaMais={prato.saibaMais}
            infos={prato.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
