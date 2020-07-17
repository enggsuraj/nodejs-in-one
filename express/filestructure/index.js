
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

const tours = JSON.parse(fs.readFileSync(path.join(`${__dirname}`, '../../dev-data/tours-simple.json')));
app.use(express.json())

const getAllTours = (req,res)=>{
  res.status(200)
  res.json({
    status:'success',
    data:{
      tours
    }
  })
}

const getTour = (req,res)=>{
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

}

const createTour = (req,res)=>{
  console.log(req.body);
  res.status(200);
  res.send('Got it!!');

  const newId = tours[tours.length-1].id+1;
  const newTour = Object.assign({id:newId},req.body);
  tours.push(newTour);

  fs.writeFile(`${__dirname}/dev-data/tours-simple.json`,JSON.stringify(tours),err=>{})
}

const updateTour = (req,res)=>{
  res.status(200).json({
    status:"success",
    data:{
      tour:'Updated...'
    }
  })
}


const deleteTour = (req,res)=>{
  console.log('Item deleted!!')
  res.status(204).json({
    status:"success",
    data:null
  })
}

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.route('/api/v1/tours')
  .get(getAllTours)
  .post(createTour)
  
app.route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour)

app.listen(3000,()=>{
  console.log('Listening!!')
})