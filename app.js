const express=require('express');
const fs=require('fs');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
app.get('/',(req,res)=>{
  fs.readFile("message.txt",(err,data)=>{
      if(err){
        console.log(err);
        data="no chat exists"
      }
      res.send(`${data}<form action="/" onSubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
          <label for="message"></label>
          <input type="text" id="message" name="message" placeHolder="message">
          <input type="hidden" id="username" name="username"<br>
          <button type="submit">Send</button> 
           </form>`);
})
  })
  
app.post('/', (req, res) => {
  console.log(req.body.username);
  console.log(req.body.message);
 fs.writeFile("message.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>err?console.log(err) : res.redirect('/'));
 });
 
 app.get('/login', (req, res) => {
  res.send(`<form onSubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login" method="POST"><input id="username" type="text" name="username"><br><button type="submit">add</button></form>`);
});

app.post('/login', (req, res) => {
  res.redirect('/');
});
  
app.listen(3000);