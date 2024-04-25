import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';
import { fetchUser } from '../../../lib/data';
import { updateUser } from '../../../lib/actions';

const SingleUserPage = async({params}) => {
    const {id} = params;
    const user = await fetchUser(id);
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={user.img || "/noavatar.png"} alt="user's avatar" fill />
                </div>
                {user.username}
            </div>
            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name="id" value={user.id} />
                    <label>Username</label>
                    <input 
                        type="text"
                        name="username"
                        placeholder={user.username || "non renseigné"}
                    />
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder={user.email || "non renseigné"}
                    />
                    <label>Avatar</label>
                    <input
                        type="text"
                        name="img"
                    />
                    <label>Password</label>
                    <input 
                        type="password"
                        name="password"
                    />
                    <label>Phone</label>
                    <input 
                        type="phone"
                        name="phone"
                        placeholder={user.phone || "non renseigné"  }
                    />
                    <label>Adress</label>
                    <textarea
                        id="adress"
                        name="adress"
                        placeholder={user.adress || "non renseigné"  }
                    >
                    </textarea>
                    <label>Is Admin?</label>
                    <select name="isadmin" defaultValue={user.isAdmin ? "true" : "false"}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label>Is Active</label>
                    <select name="isactive" defaultValue={user.isActive ? "true" : "false"}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button type="submit">Update Profile</button>
                </form>
            </div>
        </div>
    );
}
export default SingleUserPage;