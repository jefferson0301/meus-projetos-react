import React from 'react'
import styles from "./Contato.module.css"

const Contato = () => {
  return (
    <div className={styles.container__contato} >
        <h2 className={styles.container__contato__titulo} >Contato</h2>
        <ul className={styles.container__contato__lista} >
            <li className={styles.container__contato__lista__item} >Email: jefferson.s.p.s.p@gmail.com</li>
            <li className={styles.container__contato__lista__item} >Telefone: (85)999615595</li>
        </ul>
        
    </div>
  )
}

export default Contato