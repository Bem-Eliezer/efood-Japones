import { Descricao } from '../Product/styles'

import esfiha from '../../assets/images/esfiha.png'
import fundo from '../../assets/images/fundo.png'
import fechar from '../../assets/images/fechar.png'
import esfiha2 from '../../assets/images/segundaesfiha.png'
import {
  Adicionar,
  Adicionar2,
  Card2,
  Div,
  Imagem,
  Modal,
  Paragrafo,
  Titulo,
  Titulo2
} from './styles'
import { useState } from 'react'

type ModalState = {
  isVisible: boolean
}

const ProductPg2 = () => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const openModal = () => {
    setModal({
      isVisible: true
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <>
      <Card2>
        <img src={esfiha} alt="esfiha" />
        <Titulo>Pizza Marguerita</Titulo>
        <Descricao>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Descricao>
        <Adicionar
          onClick={() => {
            setModal({
              isVisible: true
            })
            openModal()
          }}
        >
          Mais Detalhes
        </Adicionar>
      </Card2>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <div className="container">
          <Imagem style={{ backgroundImage: `url(${fundo})` }}>
            <img className="esfiha" src={esfiha2} />
            <Div>
              <Titulo2>Pizza Marguerita</Titulo2>
              <Paragrafo>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </Paragrafo>
              <br />
              <Paragrafo>Serve: de 2 a 3 pessoas</Paragrafo>
              <Adicionar2>Adicionar ao carrinho - R$ 60,90</Adicionar2>
            </Div>
            <img
              className="fechar"
              src={fechar}
              onClick={() => {
                closeModal()
              }}
            />
          </Imagem>
        </div>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default ProductPg2
