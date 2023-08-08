import AppNav from "./AppNav"
import Logo from "./Logo"
import styles from "./Sidebar.module.css"
export default function Sidebar(){
    return(
        <div className={styles.Sidebar}>
        <Logo/>
        <AppNav/>
        <p>List of cities</p>
     
        </div>
    )
}