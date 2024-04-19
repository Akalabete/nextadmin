import { User } from './models'
import { connectToDatabase } from './utils'
export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, 'i');
    const ItemsPerPage = 4;
    try {
        connectToDatabase();
        const users = await User.find({username:{ $regex: regex }}).limit(ItemsPerPage).skip((page - 1) * ItemsPerPage);
        return users
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch users') 
    }
}