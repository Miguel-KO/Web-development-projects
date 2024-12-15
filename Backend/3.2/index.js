import express from "express";
const app=express();
const port=3000;

app.get("/", (req, res) =>{
    console.log(req.rawHeaders);
    res.send("<h1>Hillo</h1>");
    
})

app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});