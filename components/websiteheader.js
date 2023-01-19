import styles from '../styles/websiteheader.module.css'

const Header = ( {title} ) =>
    <header>
        <h1 className={styles.title}>{title}</h1>
    </header>

export default Header