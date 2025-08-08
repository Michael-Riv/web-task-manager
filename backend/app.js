const express =require('express');
const taskRoutes=require('./routes/taskRoutes');
const cors=require('cors');

const app=express();

app.use(cors());//allows all 

app.use((req, _res, next) => {
    console.log('>  ', req.method, req.path, 'origin:', req.headers.origin);
    next();
});


//app.options()
app.use(express.json());
app.use('/api/tasks',taskRoutes);

module.exports=app;