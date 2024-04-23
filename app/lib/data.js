import { User, Product } from './models'
import { connectToDatabase } from './utils'
export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, 'i');
    const itemsPerPage = 4;
    try {
        connectToDatabase();
        const count = await User.find({username:{ $regex: regex }}).count()
        const users = await User.find({username:{ $regex: regex }}).limit(itemsPerPage).skip((page - 1) * itemsPerPage);
        return {count, users}
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch users') 
    }
}

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, 'i');
    const itemsPerPage = 4;
    try {
        connectToDatabase();
        const count = await Product.find({title:{ $regex: regex }}).count()
        const products = await Product.find({title:{ $regex: regex }}).limit(itemsPerPage).skip((page - 1) * itemsPerPage);
        return {count, products}
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch products') 
    }
}