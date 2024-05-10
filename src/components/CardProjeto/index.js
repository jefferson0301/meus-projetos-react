import { Link } from "react-router-dom"
import styles from "./CardProjeto.module.css"

const CardProjeto = ({id,nome,descricao}) => {
  return (


        <Link to={`/meusprojetos/${id}`} className={styles.link} >
          <ul className={styles.container__meusProjetos__listaProjetos} >
            <li className={styles.container__meusProjetos__listaProjetos__item__titulo} >{nome}</li>
              <li className={styles.container__meusProjetos__listaProjetos__item} >
                <img className={styles.container__meusProjetos__listaProjetos__item__imagem} src={`assets/fotosProjetos/${id}/${id}.jpg`} alt={`Foto do projeto ${nome}`} 
                /></li>
              <li className={styles.container__meusProjetos__listaProjetos__item__descricao} >{descricao}</li>
          </ul>
        </Link>      
  )
}

export default CardProjeto