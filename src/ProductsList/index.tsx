import Product from '../components/Product'
import { Pratos } from '../pages/Home'

import { Container, List } from './styles'

type Props = {
  background: ' branco'
  pratos: Pratos[]
}

const ProductList = ({ pratos }: Props) => {
  const getPratoTags = (prato: Pratos) => {
    const tags = []

    if (prato.tipo) {
      tags.push(prato.tipo)
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {pratos.map((prato) => (
            <Product
              key={prato.id}
              image={prato.capa}
              title={prato.titulo}
              infos={getPratoTags(prato)}
              descricao={prato.descricao}
              saibaMais={prato.cardapio.nome}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
