const express=require('express');
const path=require('path');

const app=express();
app.get('/numbers/primes',(req,res,next)=>{
	res.redirect('http://104.211.219.98/numbers/primes');
});

app.get('/numbers/fibo',(req,res,next)=>{
	res.redirect('http://104.211.219.98/numbers/fibo');
});

app.get('/numbers/odd',(req,res,next)=>{
	res.redirect('http://104.211.219.98/numbers/odd');
});

app.get('/numbers/rand',(req,res,next)=>{
	res.redirect('http://104.211.219.98/numbers/rand');
});
app.listen(3000);

