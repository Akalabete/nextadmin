
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';
import styles from './rightbar.module.css';
import Image from 'next/image';

const Rightbar = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="Hero" fill className={styles.bg} />
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
                    <span className={styles.subtitle}>Take 4 min to learn</span>
                    <p className={styles.description}>Videtis conscriptis reductus ad tamen talis P viderit deos e diem est potius senatu est talis populo quid fuit de.</p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.text}>
                    <span className={styles.notification}>🚀 Coming Soon</span>
                    <h3 className={styles.title}>anuther sweet title</h3>
                    <span className={styles.subtitle}>Crack your mind</span>
                    <p className={styles.description}>Videtis conscriptis reductus ad tamen talis P viderit deos e diem est potius senatu est talis populo quid fuit de.</p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
        )
    }

export default Rightbar;