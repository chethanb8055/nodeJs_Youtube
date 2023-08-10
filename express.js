// let express = require("express")
// const morgan = require("morgan")
// let app  =express()
// let fs = require("fs")

// const data = JSON.parse(fs.readFileSync("data.json","utf-8"))

// let  products = data.products

// app.use(express.json())




// //API-CURD (Create ,read,Update,Delete)

// //update PUT/ products:id
// //putting new data in existing data

// app.put("/product/:id",(req,res)=>{
//     let id = +req.params.id
//     const productIndext = products.findIndex(p=>p.id==id)
//     products.splice(productIndext,1,{...req.body,id:3})
//    // console.log(req.body)
//    res.status(201).json();
    
//     // console.log(req.body)
// })





// //Create POST /Products
// app.post("/product",(req,res)=>{
//     products.push(req.body)
    
//     // console.log(req.body)
// })




// //below 2 are Read type API
// //Read API  GET Products
// app.get("/product",(req,res)=>{
//     res.json(products)
// })

// //Read API  GET Products/:id
// app.get("/product/:id",(req,res)=>{
//     // console.log(req.params)
//     //{ Id: 'read-shirt' }
//     let id = +req.params.id
//         const product = products.find(p=>p.id==id)
//     res.json(product)
// })
// app.post("/",(req,res)=>{
//     res.json({type:"post"})
// })
// app.put("/",(req,res)=>{
//     res.json({type:"put"})
// })
// app.delete("/",(req,res)=>{
//     res.json({type:"delete"})
// })
// app.path("/",(req,res)=>{
//     res.json({type:"path"})
// })

// app.listen(3000,()=>{
//     console.log("working the server")
// })

