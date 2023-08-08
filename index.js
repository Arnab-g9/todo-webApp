import express from 'express'
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/',(req,res)=>{
    let url=req.url;
    let today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    res.render('index.ejs', {urlName : url, time : date})
})

app.get('/today', (req,res)=>{
    let url=req.url;
    let today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    res.render('index.ejs', {urlName : url, time : date})
})

app.get('/work', (req,res)=>{
    let url=req.url;
    let text="Work List"
    res.render('index.ejs', {urlName : url, message : text})
})

app.listen(port, ()=>{
    console.log(`server running on port ${3000}`);
})