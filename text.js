const express=require('express');

const fs=require('fs');

const router=express.Router();

router.get('/',(req,res)=>{
    res.send(`<form action="/text/chat" method="POST">
            <label for="chat"></label>
            <input type="text" id="chat" name="chatText"><br>
           <button type="submit">Send</button> </form>`);
})
router.post('/text/chat', (req, res) => {
   res.redirect('/login');
    });

   module.exports=router;