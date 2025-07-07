const express=require('express');
const basicAuth=require('basic-auth');
module.exports=pool=>{
const r=express.Router();
r.get('/',async(_,res)=>{
const types=await pool.query('SELECT * FROM types');
res.render('index',{types});
});
r.post('/submit',async(req,res)=>{
const{type_id,email,message}=req.body;
if(!email||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)||!message)return res.status(400).json({error:'invalid'});
await pool.query('INSERT INTO tickets(type_id,email,message) VALUES(?,?,?)',[type_id,email,message]);
res.redirect('/');
});
r.get('/tickets',async(req,res,next)=>{
const creds=basicAuth(req);
if(!creds||creds.name!==process.env.ADMIN_USER||creds.pass!=process.env.ADMIN_PASSWORD)return res.set('WWW-Authenticate','Basic realm="tickets"').status(401).end();
const rows=await pool.query('SELECT t.id,t.email,t.message,ty.name type FROM tickets t JOIN types ty ON t.type_id=ty.id');
res.render('tickets',{rows});
});
return r;
}
