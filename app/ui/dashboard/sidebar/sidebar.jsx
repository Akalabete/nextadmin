import styles from "./sidebar.module.css";
import Image from "next/image";
import { 
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdSettings,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpOutline,
  MdLogout
 } from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
const menuItems =[
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdSettings />,
      },
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        itcon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpOutline />,
      },
    ]
  }
]
const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/noavatar.png" alt="user avatar" width="50" height="50" />
        <div className={styles.userDetails}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userRole}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
      {menuItems.map(cat =>(
        <li key={cat.title}>
          <span className={styles.cat}>{cat.title}</span>
          {cat.list.map(item => (
            <MenuLink item={item} key={item.title} />
          ))}
        </li>
      ) )}
      </ul>
      <button className={styles.logout}>{<MdLogout />} Logout</button>
    </div>
  )
}
export default SideBar;