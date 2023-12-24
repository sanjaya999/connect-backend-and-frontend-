
import express from 'express';
const app = express()
const port = 3000

app.get('/api/name' , (req,res)=>{
  const name = [
    {
      id:1,
      name : 'sanjaya'
    }
  ];
  res.send(name);
});

app.listen(port , ()=>{
  console.log(`show at ${port}`);
});