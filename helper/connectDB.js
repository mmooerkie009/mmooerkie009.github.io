import mysql from 'mysql2/promise';

const connectDB = mysql.createPool({
    host: 'localhost',
    user:'root',
    password: '11111111',
    database: 'aduino_db'
});

export default connectDB;