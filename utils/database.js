import mongoose from 'mongoose'

export const connectDb = async () => {
    const connectionString = process.env.DATABASE_URL
    console.log(connectionString)
    try {
        const connection = await mangoose.connect(connectionString)
    } catch (error) {
    
    }
}
