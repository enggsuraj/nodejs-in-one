
const fs = require('fs');
const superagent = require('superagent');

//till we havent get away from callback
//so in this code we will do that first
//instead of callback use promise to
//start with readFile promise ie readFilePro

const readFilePro = file => {
    return new Promise((resolve,reject)=>{
        fs.readFile(file, (err,data) => {
            if(err) reject('Error')
            resolve(data);
        })
    })
}

const writeFilePro = (file,data) => {
    return new Promise((resolve,reject)=>{
        fs.readFile(file, (err,data) => {
            if(err) reject('Error')
            resolve('success');
        })
    })
}


readFilePro(`${__dirname}/txt/dog.txt`)

    .then(data =>{
        return superagent.get(`https://dog.ceo/api/breeds/image/random`)
    })

    .then(res =>{
        console.log(res.body.message);
        return writeFilePro('dog-img.txt', res.body.message)
    })
    .then(()=>{
        console.log('Random dof image saved !!');
    })
    .catch(err =>{
        console.log(err); 
    })
