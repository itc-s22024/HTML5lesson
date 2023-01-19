import styles from '../styles/type.module.css'

const Type = () =>
    <ul className={styles.list}>
        <li>
            <h2 className={styles.red}>Meat</h2>
            <ul className={styles.menu}>
                <li>Beef</li>
                <li>Chicken</li>
                <li>Other</li>
            </ul>
        </li>
        <li>
            <h2 className={styles.bulue}>Fish</h2>
            <ul className={styles.menu}>
                <li>Tuna</li>
                <li>Shrimp</li>
                <li>Other</li>
            </ul>
        </li>
        <li>
            <h2 className={styles.gleen}>Vegetable</h2>
            <ul className={styles.menu}>
                <li>Tomato</li>
                <li>Lettuce</li>
                <li>Other</li>
            </ul>
        </li>
    </ul>


export default Type