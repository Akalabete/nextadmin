import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';
import { fetchProduct } from '../../../lib/data';
import { updateProduct } from '../../../lib/actions';

const SingleProductPage = async ({params}) => {
    const {id} = params;
    const product = await fetchProduct(id);
    const categories = ["kitchen", "techno", "home"];
    const defaultCategory = categories.includes(product.cat) ? product.cat : "uncategorized";

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={product.img ||'/noproduct.jpg'} alt='article pic' fill />
                </div>
                Product whatever
            </div>
            <div className={styles.formContainer}>
                <form action={updateProduct} className={styles.form}>
                    <input type="hidden" name="id" value={product.id} />
                    <label>Title</label>
                    <input 
                        type="text"
                        name="title"
                        placeholder={product.title || "NA"}
                    />
                    <label>Price</label>
                    <input 
                        type="number"
                        name="price"
                        placeholder={`${product.price} €` || "NA"}
                    />
                    <label>Stock</label>
                    <input 
                        type="number"
                        name="stock"
                        placeholder={product.stock || "NA"}
                    />
                    <label>Image</label>
                    <input 
                        type="text"
                        name="img"
                    />
                    <label>Color</label>
                    <input 
                        type="text"
                        name="color"
                        placeholder={product.color || "NA"}
                    />
                    <label>Size</label>
                    <input 
                        type="text"
                        name="size"
                        placeholder={product.size || "NA" }
                    />
                    <label>Category</label>
                    <select name="cat" defaultValue={defaultCategory}>
                        <option value="kitchen">Kitchen</option>
                        <option value="techno">Technologies</option>
                        <option value="home">House</option>
                    </select>
                    <label>Description</label>
                    <textarea
                        id="desc"
                        name="desc"
                        rows="10"
                        placeholder={product.desc || "NA"  }
                    >
                    </textarea>
                    <button type="submit" >Update Article</button>
                </form>
            </div>
        </div>
    );
}
export default SingleProductPage;