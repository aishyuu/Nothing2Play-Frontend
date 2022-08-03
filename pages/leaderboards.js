import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import styles from '../styles/Home.module.css'

export default function leaderboards() {
    return(
        <div className={styles.standard}>
            <Navigation />
            <h1>Leaderboards</h1>
            <Footer />
        </div>
    )
}