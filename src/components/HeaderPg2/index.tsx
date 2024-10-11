import { Logo, Imagem, Restaurantes, Carrinho, Container } from './styles'

import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/banner-fundo.png'

const HeaderPage2 = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <Restaurantes className="container">
        Restaurantes
        <Logo>
          <img src={logo} alt="EFOOD" />
        </Logo>
        <Carrinho>0 produto(s) no carrinho</Carrinho>
      </Restaurantes>
    </Container>
  </Imagem>
)

export default HeaderPage2
