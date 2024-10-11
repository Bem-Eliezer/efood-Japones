import { Frase, Logo, Imagem } from './styles'

import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/banner-fundo.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Logo>
      <img src={logo} alt="EFOOD" />
    </Logo>
    <Frase className="container">
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Frase>
  </Imagem>
)

export default Header
