import mongoose from 'mongoose';

export const connectToDatabase = async () => {
    const DBConnectionString = process.env.DB_CONNECTION_STRING;
    const connection = {}
    try {
        if (connection.isConnected){
            return;
        }
        const db = await mongoose.connect(DBConnectionString);
        connection.isConnected = db.connections[0].readyState;
    } catch (error){
        throw new error('Error connecting to database');
    }
}