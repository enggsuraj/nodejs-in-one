const fs = require('fs');
const express = require('express');
var bodyParser = require('body-parser');
const { json } = require('body-parser');

const app = express();
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/tours-simple.json`));

app.use(express.json())

app.get('/api/v1/tours',(req,res)=>{

  res.status(200)
  res.json({
    status:'success',
    data:{
      tours
    }
  })
});

app.get('/',(req,res)=>{
  res.send('Welcome')
})

app.post('/api/v1/tours',(req,res)=>{
  console.log(req.body);
  res.status(200);
  res.send('Got it!!');

  const newId = tours[tours.length-1].id+1;
  const newTour = Object.assign({id:newId},req.body);
  tours.push(newTour);

  fs.writeFile(`${__dirname}/dev-data/tours-simple.json`,JSON.stringify(tours),err=>{})
})


app.get('/api/v1/tours/:id', (req,res)=>{

  console.log(req.params);

  //to convert to int
  const id = req.params.id * 1;
  //if that idn found assign to tour
  const tour = tours.find(el => el.id === id)
  console.log(tour);

  if(id>tours.length){
    return res.status(404).json({
      status:'fail',
      message:'Invalid ID'
    });
  }

  res.status(200).json({
    status:'success',
    data:{
      tour
    }
  })
})

//UPDATE
app.patch('/api/v1/tours/:id',(req,res)=>{
  res.status(200).json({
    status:"success",
    data:{
      tour:'Updated...'
    }
  })
})


//DELETE
app.delete('/api/v1/tours/:id',(req,res)=>{
  console.log('Item deleted!!')
  res.status(204).json({
    status:"success",
    data:null
  })
})


app.listen(3000,()=>{
  console.log('Listening!!')
})