const fs= require('fs');
const express=require('express');
const bodyparser=require('body-parser');
const { resolve } = require('path');
const { rejects } = require('assert');


const app=express();

// app.use(bodyparser.urlencoded({extended:true}));

// app.post("/",(req,res)=>{
//     const {name,details}=req.body;
//     fs.readdir('/',(err,files)=>{
//         if(files.find((file)=>file===name))
//         {
//             res.send("File Exist with same Name");
//         }
//         else{
//             fs.appendFile(name+'.txt',details,(err)=>{
//                 if(err) {
//                     console.log(err);
//                 }
//                 else{
//                     res.send(name+" File Created succefully");
//                 }
//             });
//         }
//     })
// })

// function fco(callback)
// {
//     let count=0;
//     fs.readdir(__dirname,(err,files)=>{
//         files.forEach((file)=>{
//             if(file.substring(0,5)=="ullas")
//             {
//                 count++;
//             }
//         })
//         callback(count);
    
//     })
    
// }

// fco((count,err)=>{
//     console.log(count);
//     fs.appendFile('ullas'+count+'.txt',Math.random().toString(36),(err)=>{
    
//             if(err) {
//                 console.log(err);
//             }
//             else{
                
//                 console.log("File Created succefully");
//             }
//         })
// })


function foc(){
    return new Promise((resolve,rejects)=>{
        let count=0;
        fs.readdir(__dirname,(err,files)=>{
            files.forEach((file)=>{
                if(file.substring(0,5)=="ullas")
                {
                    count++;
                }
            });
            resolve(count);
        })
    })
}

foc().then((count)=>{
    console.log(count);
})
// fs.appendFile('ullas.txt',Math.random().toString(36),(err)=>{
    
//     if(err) {
//         console.log(err);
//     }
//     else{
        
//         console.log("File Created succefully");
//     }
// })
app.listen(3000,()=>{
    console.log("server listerning on port 3000");
});