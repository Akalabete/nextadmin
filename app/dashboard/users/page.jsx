import styles from '../../ui/dashboard/users/users.module.css';
import Search from '../../ui/dashboard/search/search';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '../../ui/dashboard/pagination/pagination';
import { fetchUsers } from '../../lib/data';
import { deleteUser } from '../../lib/actions';

const UsersPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, users}  = await fetchUsers(q, page);

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
              <td>Avatar</td>
              <td>Name</td>
              <td>Email</td>
              <td>Created at</td>  
              <td>Role</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key= {user.id}>
                <td>
                  <div className={styles.user}>
                    <Image 
                      src={user.img || '/noavatar.png'} 
                      alt="`avatar of ${user.name}`"
                      className={styles.userImage}  
                      width={40} 
                      height={40}
                    />
                  </div>
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4,16)}</td>
                <td>{user.isAdmin ? "Admin" : "User"}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <div className= {styles.buttons}>
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className={`${styles.button} ${styles.viewbtn}`}>View</button>
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={user.id} />
                      <button className={`${styles.button} ${styles.deletebtn}`}>Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={count} />
    </div>
  );
}

export default UsersPage;