import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><a href="www.lacouralexandre.tech" target="_blank" >Dev&apos;your Synergy</a></div>
            <div className={styles.text}>© 2024 All rights reserved</div>
        </div>
    )
}