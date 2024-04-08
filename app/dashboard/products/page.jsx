import styles from '../../ui/dashboard/products/products.module.css';
import Search from '../../ui/dashboard/search/search';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '../../ui/dashboard/pagination/pagination';

const ProductsPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <Search  placeholder="Search for a product" />
          <Link href="/dashboard/products/add" />
          <button className={styles.addBtn}>Add Product</button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td> 
              <td>Price</td>
              <td>Created at</td> 
              <td>Stock</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.product}>
                  <Image 
                    src="/noproduct.jpg" 
                    alt="avatar" 
                    className={styles.productImage}  
                    width={40} 
                    height={40}
                  />
                  Product 1
                </div>
              </td>
              <td>a super product 1</td>
              <td>45.10€</td>
              <td>05.04.2024</td>
              <td>12</td>
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
                <div className={styles.product}>
                  <Image 
                    src="/noproduct.jpg" 
                    alt="avatar" 
                    className={styles.productImage}  
                    width={40} 
                    height={40}
                  />
                  Product 2
                </div>
              </td>
              <td>a super product 2</td>
              <td>12.34€</td>
              <td>05.04.2024</td>
              <td>21</td>
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

export default ProductsPage;