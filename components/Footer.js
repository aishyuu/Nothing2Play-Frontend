import styles from '../styles/Home.module.css'

function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <footer className={styles.footer}>
            <p>Copyright © Aiyu Bonbon {currentYear}</p>
        </footer>
    )
}

export default Footer;