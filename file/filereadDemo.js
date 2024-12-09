import fs from 'fs'

import fsp from 'fs/promises'

// // callback
// fs.readFile('./file/test.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// // sync version
// const data = fs.readFileSync('./file/test.txt','utf-8');
// console.log(data)

// // promise then
// fsp.readFile('./file/test.txt','utf-8')
//     .then((data)=>console.log(data))
//     .catch((err)=>console.lot(err))

// async await
const readFile = async()=>{
    try {
        const data = await fsp.readFile('./file/test.txt','utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


const writeFile = async () => {
    try{    
        await fsp.writeFile('./file/test.txt','This written by js script')
        console.log('file written');
    }catch(err){
        console.log(err)    
    }
};
// append text to the file
const appendFile = async () => {
    try{
        await fsp.appendFile('./file/test.txt', '\nThis is appended text')
        console.log('file appended');
    }catch(err){
        console.log(err)
    }
}

writeFile();
appendFile();
readFile()