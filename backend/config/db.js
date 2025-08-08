
const mongoose =require('mongoose')
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGOdb_URI);
        console.log(`connected to MongoDB: ${conn.connection.host}`)

    }
    catch(error){
        console.log(`failed to connect to MongoDB`,error.message);
        process.exit(1);

    }

};
module.exports=connectDB;