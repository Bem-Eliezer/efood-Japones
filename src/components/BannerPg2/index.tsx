import { Frase, Imagem, Italiana } from './styles'

import bannerImg from '../../assets/images/imagemDeFundo-2.png'

const BannerPg2 = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Italiana>Italiana</Italiana>
      <Frase>La Dolce Vita Trattoria</Frase>
    </div>
  </Imagem>
)

export default BannerPg2
