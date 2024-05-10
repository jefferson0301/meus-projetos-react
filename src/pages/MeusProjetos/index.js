import styles from "./MeusProjetos.module.css"
import projetos from "database.json"
import CardProjeto from "components/CardProjeto"

const MeusProjetos = () => {
  console.log(projetos)
  return (
    <div className={styles.container__meusProjetos} >
        <h1 className={styles.container__meusProjetos__titulo} >Meus Projetos</h1>
        <div className={styles.container__meusProjetos__projetos} >
          {projetos.map(projeto => (
            <div key={projeto.id} className={styles.container__meusProjetos__projetos__projeto} >
              <CardProjeto  id={projeto.id} nome={projeto.nome}  descricao={projeto.descricao} />
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default MeusProjetos