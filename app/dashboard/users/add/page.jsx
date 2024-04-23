import styles from '../../../ui/dashboard/users/addUser/addUser.module.css';
import { addUser } from '../../../lib/actions';
const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input 
                    type="text" 
                    placeholder="username"
                    name="username"
                    required
                />
                <input 
                    type="email" 
                    placeholder="email"
                    name="email"
                    required
                />
                <input 
                    type="password"
                    placeholder="password"
                    name="password"
                />
                <input 
                    type="phone"
                    placeholder="phone"
                    name="phone"
                />
                <select
                    name="role"
                    id="role"
                    required
                >   
                    <option value={false}>Is Admin</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select
                    name="active"
                    id="active"
                    required
                >   
                    <option value={true}>Is Active</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    id="adress"
                    row="16"
                    placeholder="adress"
                    name="adress"
                ></textarea>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default AddUserPage;