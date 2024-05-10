import styles from "./Projeto.module.css"
import {  useParams } from 'react-router-dom'
import posts from "database.json"

const Projeto = () => {

  let ref = useParams() 
  let id = ref.id
  const post = posts.find((post) =>{
    return post.id === Number(id)
  } )
  
  return (
    <div className={styles.card__post} >
        <h1 className={styles.card__post__titulo} >{post.nome}</h1>
        <img className={styles.card__post__foto} src={`/assets/fotosProjetos/${id}/${id}.jpg`} alt={`Foto do projeto ${id} ${post.nome}`} />
        <p className={styles.card__post__descricao} >{post.descricao}</p>
    </div>
  )
  
}

export default Projeto