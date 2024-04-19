import { User } from './models'
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