
//dog.ceo api

//Callback inside a callback and so on .... = callback hell

const fs = require('fs');
const superagent = require('superagent');

//callback
fs.readFile(`${__dirname}/txt/dog.txt`,(err,data)=>{
    
    //callback
    superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    .end((err,res)=>{
        if(err) return console.log(err.message); 
        console.log(res.body.message);

        //callback
        fs.writeFile('dog-img.txt', res.body.message ,err =>{
            if(err) return console.log(err.message); 
            console.log('Random dof image saved !!');

        })
    })
});

/*
https://images.dog.ceo/breeds/hound-basset/n02088238_8480.jpg
Random dof image saved !!
*/

