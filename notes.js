//part-1
// console.log(__filename)
app.get("/",(req,res)=>{
    // res.send("Hi this is chethan")
    res.status(201).send("helloe")
    // res.sendFile(__dirname+"/dummy.json");
    // res.sendStatus(404)
})
// console.log()
app.listen(3000,()=>{
    console.log("sever is running on port 3000")
    
})


//2nd


//API-EndPoint (its a server end  point req come , server response and go out)
app.get("/",(req,res)=>{
    res.json({type:"GET"})
})

app.get("/user/:id",(req,res)=>{
    res.json({type:"GET"})
    console.log(req.params)
    // { id: '12' }
})

app.post("/",(req,res)=>{
    res.json({type:"post"})
})
app.put("/",(req,res)=>{
    res.json({type:"put"})
})
app.delete("/",(req,res)=>{
    res.json({type:"delete"})
})
app.path("/",(req,res)=>{
    res.json({type:"path"})
})



// Middle-ware
let express = require("express")
const morgan = require("morgan")
let app  =express()

//tharparty middle ware
app.use(morgan('default'))
//output:- ::1 - - [Tue, 08 Aug 2023 12:06:41 GMT] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"



// https://expressjs.com/en/guide/writing-middleware.html 
//https://expressjs.com/en/4x/api.html#res

//most Cases the middleware are we get readymade  

//custom middleware
//logger middleware type or application level middle ware
// app.use((req,res,next )=>{
//     console.log(req.method,req.ip,req.hostname,req.get( ))
//     //out-put:-GET ::1 localhost
//     //next() :-it tell that u can go now
//     next()
// })

//this auth middle ware dont want apply for all route so 
//we can add this to any GET ,POST ,POST

app.use(express.static('public'))
const auth =(req,res,next)=>{
    if(req.body.password==="1234"){
        next()
    }else{
        res.sendStatus(401)
    }
} 
app.use(express.json())

app.use(auth)

app.get("/",auth,(req,res)=>{
    res.json({type:"GET"})
})
app.post("/",auth,(req,res)=>{
    res.json({type:"post"})
})
app.put("/",(req,res)=>{
    res.json({type:"put"})
})
app.delete("/",(req,res)=>{
    res.json({type:"delete"})
})
app.path("/",(req,res)=>{
    res.json({type:"path"})
})

app.listen(3000,()=>{
    console.log("working the server")
})


//API-CURD (Create ,read,Update,Delete)

//update PUT/ products:id
//putting new data in existing data

app.put("/product/:id",(req,res)=>{
    let id = +req.params.id
    const productIndext = products.findIndex(p=>p.id==id)
    products.splice(productIndext,1,{...req.body,id:3})
   // console.log(req.body)
   res.status(201).json();
    
    // console.log(req.body)
})





//Create POST /Products
app.post("/product",(req,res)=>{
    products.push(req.body)
    
    // console.log(req.body)
})




//below 2 are Read type API
//Read API  GET Products
app.get("/product",(req,res)=>{
    res.json(products)
})

//Read only one API  GET Products/:id
app.get("/product/:id",(req,res)=>{
    // console.log(req.params)
    //{ Id: 'read-shirt' }
    let id = +req.params.id
        const product = products.find(p=>p.id==id)
    res.json(product)
})
