class Pratos {
  title: string
  descricao: string
  saibaMais: string
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    title: string,
    descricao: string,
    saibaMais: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.descricao = descricao
    this.saibaMais = saibaMais
    this.image = image
    this.infos = infos
  }
}

export default Pratos
