import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';


const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src='/noavatar.png' alt='avatar' fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input 
                        type="text"
                        name="username"
                        placeholder="John Doe"
                    />
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="JohnDoe@test.fr"
                    />
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="JohnDoe@test.fr"
                    />
                    <label>Password</label>
                    <input 
                        type="password"
                        name="password"
                        placeholder=""
                    />
                    <label>Phone</label>
                    <input 
                        type="phone"
                        name="phone"
                        placeholder="1234567890"
                    />
                    <label>Adress</label>
                    <textarea
                        id="adress"
                        name="adress"
                        placeholder="adress"
                    >
                    </textarea>
                    <label>Is Admin?</label>
                    <select name="isadmin">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label>Is Active</label>
                    <select name="isactive">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button>Update Profile</button>
                </form>
            </div>
        </div>
    );
}
export default SingleUserPage;