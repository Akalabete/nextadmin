import { User } from './models'
import { connectToDatabase } from './utils'
export const fetchUsers = async () => {
    try {
        connectToDatabase();
        const users = await User.find();
        return users
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch users') 
    }
}