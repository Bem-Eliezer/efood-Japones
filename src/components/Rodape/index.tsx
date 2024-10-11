import { Frase, Logo, Imagem, RedesSociais, Container } from './styles'

import logo from '../../assets/images/logo.svg'
import redesSociais from '../../assets/images/redes_sociais.svg'
import bannerImg from '../../assets/images/banner-fundo.png'

const Rodape = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <Logo>
        <img src={logo} alt="EFOOD" />
      </Logo>
    </Container>
    <RedesSociais>
      <img src={redesSociais} alt="redes-sociais" />
    </RedesSociais>
    <Container>
      <Frase>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </Frase>
    </Container>
  </Imagem>
)

export default Rodape
