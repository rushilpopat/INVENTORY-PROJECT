const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://myAtlasDBUser:rushil123@myatlasclusteredu.fd9z1.mongodb.net/IMS?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB Atlas Successfully!");
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
  }
};

module.exports = connectToMongo;
