import styles from '../../ui/dashboard/users/users.module.css'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'

const UsersPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <Search  placeholder="Search for an user" />
          <Link href="/dashboard/users/add" />
          <button className={styles.add}>Add User</button>
        </div>
        <table className={styles.table}>

        </table>
    </div>
  );
}

export default UsersPage;