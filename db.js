// db.js
const mongoose = require('mongoose');

const connectToMongo = () => {
    mongoose.connect("mongodb+srv://panchalpriyanshu124_db_user:40YXQHkmxeu7pK91@cluster0.qdfwevq.mongodb.net/")
    .then(() => {
        console.log('Mongoose connected');
    })
    .catch((e) => {
        console.log('Failed to connect to MongoDB', e);
    });
};

module.exports = connectToMongo;

