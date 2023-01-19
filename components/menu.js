import styles from '../styles/menu.module.css'

const Menu = () =>
    <div>
    <style jsx global>{`
        body {
            background-color: #EDC;
        }
        `}
    </style>
    <div className={styles.body}>
        <div className={styles.box}>
            <div className={styles.box_head}>
                <h1>Cafe Prep</h1>
            </div>
            <nav className={styles.box_body}>
                <h2>Drink</h2>
                <ul>
                    <li>Coffee</li>
                    <li>Latte</li>
                    <li>Espresso</li>
                </ul>
            </nav>
        </div>
    </div>
    </div>
export default Menu