//import

const express = require('express');
const app = express();


//SET UP HOME ROUTE 

app.get('/', function(req, res) {
    //ACCES DATABASE if needed
    //make some logic based off what is inside of request
    //access an API and return some data
    //send a respose at the end
    res.send('Hello, World!');
});


//make an onother route here
app.get('/sei', (req, res) => {
    res.send('SEI 412');
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listeneing on ${PORT}`)
});

//or it could be just    app.listen(8000);
// app.listen(8000, () => {
//     console.log(`Server is listening on Port 8000`);
// });
