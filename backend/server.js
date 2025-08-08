const dotenv=require('dotenv');
const connectDB=require('./config/db');
const app=require('./app')

dotenv.config()
connectDB();


const port =process.env.PORT ;
app.listen (port, ()=>{
    console.log(`server up and running on http://localhost:${port}`);
})