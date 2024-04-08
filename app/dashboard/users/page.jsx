import styles from '../../ui/dashboard/users/users.module.css';
import Search from '../../ui/dashboard/search/search';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '../../ui/dashboard/pagination/pagination';

const UsersPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <Search  placeholder="Search for an user" />
          <Link href="/dashboard/users/add">
            <button className={styles.addBtn}>Add User</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created at</td>  
              <td>Role</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image 
                    src="/noavatar.png" 
                    alt="avatar" 
                    className={styles.userImage}  
                    width={40} 
                    height={40}
                  />
                  John Doe
                </div>
              </td>
              <td>johndoe@test.fr</td>
              <td>05.04.2024</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className= {styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.viewbtn}`}>View</button>
                  </Link>
                  <button className={`${styles.button} ${styles.deletebtn}`}>Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
              <div className={styles.user}>
                  <Image 
                    src="/noavatar.png" 
                    alt="avatar" 
                    className={styles.userImage}  
                    width={40} 
                    height={40}
                  />
                  Jo Do
                </div>
              </td>
              <td>jodo@test.fr</td>
              <td>05.04.2024</td>
              <td>Client</td>
              <td>Inactive</td>
              <td>
                <div className= {styles.buttons}>
                  <Link href="/">
                    <button className={`${styles.button} ${styles.viewbtn}`}>View</button>
                  </Link>
                  <button className={`${styles.button} ${styles.deletebtn}`}>Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
    </div>
  );
}

export default UsersPage;