import { User } from './models'
import { connectToDatabase } from './utils'
export const fetchUsers = async (q) => {
    const regex = new RegExp(q, 'i');
    try {
        connectToDatabase();
        const users = await User.find({username:{ $regex: regex }})
        return users
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch users') 
    }
}