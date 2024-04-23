import styles from '../../../ui/dashboard/products/addProduct/addProduct.module.css';
import { addProduct } from '../../../lib/actions'; 
const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input 
                    type="text" 
                    placeholder="title"
                    name="title"
                    required
                />
                <select 
                    name="category" 
                    id="category" 
                    required
                >
                    <option value="general">Choose a category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="computer">Computer</option>
                    <option value="dressing">Dressing</option>
                    <option value="home">Home</option>
                </select>
                <input 
                    type="number"
                    placeholder="price"
                    name="price"
                />
                <input 
                    type="number"
                    placeholder="stock"
                    name="stock"
                />
                <input
                    type="text"
                    placeholder="color"
                    name="color"
                />
                <input 
                    type="text"
                    placeholder="size"
                    name="size"
                />
                <textarea
                    id="desc"
                    row="16"
                    placeholder="description"
                    name="desc"
                ></textarea>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProductPage;