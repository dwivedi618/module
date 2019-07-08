const express = require('express'),
    path = require('path');
const app = express();
app.use(express.static('./dist/examportal'));

app.get('/*', (req,res) =>{
    res.sendFile(path.join(__dirname,'/dist/examportal/index.html'));

});
app.listen(process.env.PORT || 4200,()=>{
    console.log('server started');
})