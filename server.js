const express = require('express');
const app = express();
const PORT = 3000;

// In memory database
let tasks = [
    {id:1, title:'Initial task',completed:false}
];

app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
});