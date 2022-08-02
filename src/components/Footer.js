function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <p className="footer">Copyright © Aiyu Bonbon {currentYear}</p>
        </footer>
    )
}

export default Footer