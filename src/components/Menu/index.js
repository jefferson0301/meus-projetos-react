import styles from "./Menu.module.css"
import {NavLink} from "react-router-dom"


const Menu = () => {
  return (
    <div className={styles.containerMenu} >
      <NavLink 
        className={styles.link}  
        to={"/"}  
        style= { ({isActive}) => {
           return {
            color: isActive ? "blue" : "",
            borderColor: isActive ? "blue" : ""
           }}
        }>
      Principal
      </NavLink>

      <NavLink className={styles.link} 
      to={"/sobremim"}
      style= { ({isActive}) => {
        return {
         color: isActive ? "blue" : "",
         borderColor: isActive ? "blue" : ""
        }}
     }> Sobre Mim </NavLink>

<NavLink className={styles.link} 
      to={"/contato"}
      style= { ({isActive}) => {
        return {
         color: isActive ? "blue" : "",
         borderColor: isActive ? "blue" : ""
        }}
     }>  Contato </NavLink>

    </div>
  )
}

export default Menu