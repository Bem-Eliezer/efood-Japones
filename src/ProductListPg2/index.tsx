import Product from '../components/Product'
import ProductPg2 from '../components/ProductPg2'
import { Pratos } from '../pages/Home'

import { Container, List } from './styles'

const ProductListPg2 = () => (
  <>
    <Container>
      <div className="container">
        <List>
          <ProductPg2 />
          <ProductPg2 />
          <ProductPg2 />
          <ProductPg2 />
          <ProductPg2 />
          <ProductPg2 />
        </List>
      </div>
    </Container>
  </>
)

// type Props = {
//   pratos: Pratos[]
// }

// const ProductListPg2 = ({ pratos }: Props) => {
//   const getPratoTags = (prato: Pratos) => {
//     const tags = []

//     if (prato.cardapio) {
//       tags.push(prato.tipo)
//     }

//     return tags
//   }

//   return (
//     <Container>
//       <div className="container">
//         <List>
//           {pratos.map((prato) => (
//             <li key={prato.cardapio.id}>
//               <Product
//                 id={prato.cardapio.id}
//                 image={prato.cardapio.foto}
//                 title={prato.cardapio.nome}
//                 infos={getPratoTags(prato)}
//                 descricao={prato.cardapio.descricao}
//               />
//             </li>
//           ))}
//         </List>
//       </div>
//     </Container>
//   )
// }

export default ProductListPg2
