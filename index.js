const express=require("express")
const app=express()
const port=2002;
const cors=require("cors")
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({
	extended:true
}))



app.use(bodyParser.json())
app.use(cors())





app.get("/",(req,res)=>{
	res.send("server is created")
})
app.post("/newData",(req,res)=>{
	console.log(req.body)
	const {name,password,course,gender}=req.body
	console.log(name,password,course,gender,"are the values")
})
app.listen(port)