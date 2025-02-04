const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Подключение к MongoDB без устаревших опций
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected successfully: ${conn.connection.host}`);
        return true; // Успешное подключение
    } catch (error) {
        console.error(`Database connection failed: ${error.message}`);
        return false; // Ошибка подключения
    }
};

module.exports = { connectDB };

