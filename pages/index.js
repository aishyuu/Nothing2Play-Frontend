import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation'
import Introduction from '../components/Introduction'
import Footer from '../components/Footer'
import Link from 'next/Link'

export default function Home() {
  return (
    <div className={styles.standard}>
      <Navigation />
      <Introduction />
      <div className={styles.instructionsLink}>
        <Link href="/steamIdTutorial">
          <a>What's a Steam ID?</a>
        </Link>
      </div>
      <Footer />
    </div>
  )
}
