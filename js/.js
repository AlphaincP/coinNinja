app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Acess-Control-Allow-Headers','Content-Type')
    res.header('Access-Control-Expose-Headers', '*')
  next();
})