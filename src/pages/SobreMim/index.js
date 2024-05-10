import styles from "./SobreMim.module.css"

const SobreMim = () => {
  return (
    <div className={styles.catd__sobreMim} >
        <h2 className={styles.catd__sobreMim__titulo} >Sobre Mim</h2>
        <p className={styles.catd__sobreMim__paragrafo} >
            Olá meu nome é Jefferson. Iniciei meus estudos em Bacharelado Ciências da Computação em 2012 na 
            Universidade Estadual do Ceará no qual aprendi a programar na linguagem C e Java. 
        </p>
        <p className={styles.catd__sobreMim__paragrafo} >
            Durante o curso fui monitor da disciplina de Algebra Linear por 1 ano e 3 meses. Participei do 
            Programa de Educação Tutorial  da Computação por 1 ano e 5 meses onde tive experiência com o ensino,
            a pesquisa e a extensão. Nesse programa tive diversas experiências: colaborei para a organização da 
            semana da computação, ajudei na organização da olimpíada cearense de informática, ajudei na criação 
            de aplicativos para a universidade, palestrei em colégios e iniciei meus estudos no desenvolvimento web 
            onde tive meu primeiro contato com Html, Css, Java Script e Angular.  
        </p>
        <p className={styles.catd__sobreMim__paragrafo} >
            Em 2016 prestei concurso para a Polícia Militar do Ceará cargo de Soldado e obtive exito. Em 2017 comecei
            a trabalhar como policial militar e continuo até o presente momento.
        </p>
        <p className={styles.catd__sobreMim__paragrafo} >
            Em janeiro 2023 após alguns anos sem programar descidi voltar a estudar programação e fiz cursos de Html,
            Css, Java Script, React, Node Js. Após esse tempo de estudo, aprimorei meus conhecimentos e busco 
            uma oportunidade no mercado de trabalho como pessoa jurídica, freelancer ou horista.
        </p>
    </div>
  )
}

export default SobreMim