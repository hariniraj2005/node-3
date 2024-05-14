const express=require('express');

const router=express.Router();

router.get('/login', (req, res) => {
    res.send(`<form action="/login/form-login" method="POST" id="loginForm">
            <label for="name"></label>
            <input type="text" id="name" name="UserName"><br>
           <button type="submit">Send</button></form>
           <script>
              document.getElementById("loginForm").addEventListener("submit", function(event) 
              {
               event.preventDefault();
               const username = document.getElementById("name").value;
               localStorage.setItem("username", username);
               });
       </script>`);
          });

  router.post('/login/form-login', (req, res) => {
    
        res.redirect('/'); 
    
    });

    module.exports=router;