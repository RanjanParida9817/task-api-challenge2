const express = require('express');
const app = express();
const PORT = 3000;

// In memory database
let tasks = [
    {id:1, title:'Initial task',completed:false}
];

app.get('/tasks',(req,res)=>{
    res.json(tasks);
})

app.post('/tasks',(req,res)=>{
    const {title} = req.body;
    if(!title){
       return res.status(400).json({ error: 'Title is required' }); 
    }
    
    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
});