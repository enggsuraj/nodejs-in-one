
//supeagent get method return promise
//like yeah sever give me a random dog image in the background and give me when you are ready

//so promise will async get data in the background and promise to give back
//after getting data we connsume it using .then()

//dog.ceo api

//Callback inside a callback and so on .... = callback hell

const fs = require('fs');
const superagent = require('superagent');

//callback
fs.readFile(`${__dirname}/txt/dog.txt`,(err,data)=>{
    
    //callback
    superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    
    //after we get promise result 
    .then(res =>{
        console.log(res.body.message);
        //a result promise might not be always successful
        //hence use catch after then to catch any error

        //another callback
        fs.writeFile('dog-img.txt', res.body.message ,err =>{
            if(err) return console.log(err.message); 
            console.log('Random dof image saved !!');
        })
    }).catch(err =>{
        console.log(err.message); 
    })
});

/*
https://images.dog.ceo/breeds/hound-basset/n02088238_8480.jpg
Random dof image saved !!
*/

