import { Logo, Imagem, Restaurantes, Carrinho, Container } from './styles'

import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/banner-fundo.png'
import { useEffect, useState } from 'react'
import { Pratos } from '../../pages/Home'

const HeaderPage2 = () => {
  const [prato, setPrato] = useState<Pratos>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPrato(res))
  }, [])

  if (!prato) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <Container>
        <Restaurantes className="container">
          Restaurantes {prato.id}
          <Logo>
            <img src={logo} alt="EFOOD" />
          </Logo>
          <Carrinho>0 produto(s) no carrinho</Carrinho>
        </Restaurantes>
      </Container>
    </Imagem>
  )
}

export default HeaderPage2
