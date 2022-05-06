import mongoose from 'mongoose'

const conncetDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${process.env.MONGO_URI}`.cyan.underline.bold)
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

export default conncetDB