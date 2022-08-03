import styles from '../styles/Home.module.css'

function Introduction() {
    return(
        <div>
            <div className={styles.introText}>
                <h1>You got nothing to play?</h1>
                <h3>Let's see if that's true</h3>
            </div>
            <div className={styles.introForm}>
                <form>
                    <label for="steamID">Steam ID:</label>
                    <input type="text" id="steamID" name="steamID" size="50" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Introduction;