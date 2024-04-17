import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';


const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src='/noproduct.jpg' alt='article pic' fill />
                </div>
                Product whatever
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input 
                        type="text"
                        name="title"
                        placeholder="Product x"
                    />
                    <label>Price</label>
                    <input 
                        type="number"
                        name="price"
                        placeholder="€"
                    />
                    <label>Stock</label>
                    <input 
                        type="number"
                        name="stock"
                        placeholder="NA"
                    />
                    <label>Color</label>
                    <input 
                        type="text"
                        name="color"
                        placeholder="NA"
                    />
                    <label>Size</label>
                    <input 
                        type="text"
                        name="size"
                        placeholder="NA"
                    />
                    <label>Category</label>
                    <select name="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="techno">Technologies</option>
                        <option value="home">House</option>
                    </select>
                    <label>Description</label>
                    <textarea
                        id="desc"
                        name="desc"
                        rows="10"
                        placeholder="Description of the article"
                    >
                    </textarea>
                    <button>Update Article</button>
                </form>
            </div>
        </div>
    );
}
export default SingleProductPage;