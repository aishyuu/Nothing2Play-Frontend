import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Tutorial1 from '../public/images/Tutorial1.PNG'
import Tutorial2 from '../public/images/Tutorial2.PNG'
import Tutorial3 from '../public/images/Tutorial3.PNG'
import Tutorial4 from '../public/images/Tutorial4.PNG'
import Tutorial5 from '../public/images/Tutorial5.PNG'

function SteamIdTutorial() {
    return(
        <div className={styles.tutorial}>
            <Navigation />
            <div className={styles.tutorialMain}>
                <h3>A Steam ID is a unique set of 17 numbers that identifies your steam account. We use this to display the games you own as well as the time played.</h3>
                <br />
                <h3>To get your Steam ID, follow these steps...</h3>
                <div className={styles.space}></div>
                <h4>1. Open Steam and go to your profile</h4>
                <Image
                    src={Tutorial1}
                    alt="Tutorial Image 1"
                />
                <div className={styles.space}></div>
                <h4>2. Click on "Edit Profile" and go into the "Privacy Settings"</h4>
                <div className={styles.space}></div>
                <h4>3. Make sure your "My Basic Details", "My Profile", and "Game details" are all Public. If you just switched it to Public, you want to give it a few minutes before using this website.</h4>
                <Image
                    src={Tutorial2}
                    alt="Tutorial Image 2"
                />
                <div className={styles.space}></div>
                <h4>4. Click on the "Steam" on the top left of your Steam Desktop App and click "Settings"</h4>
                <Image
                    src={Tutorial3}
                    alt="Tutorial Image 3"
                />
                <div className={styles.space}></div>
                <h4>5. Go to the interface tab and click the "Display web address bars when available</h4>
                <Image
                    src={Tutorial4}
                    alt="Tutorial Image 4"
                />
                <div className={styles.space}></div>
                <h4>6. Now go back to your profile and you will now see those 17 numbers</h4>
                <Image
                    src={Tutorial5}
                    alt="Tutorial Image 5"
                />
                <div className={styles.space}></div>
                <h4>Have fun and enjoy your gaming session!</h4>
                <div className={styles.space}></div>
            </div>
            <Footer />
        </div>
    )
}

export default SteamIdTutorial