// // //import

// // const express = require('express');
// // const app = express();
// // const axios = require('axios');



// // //SET UP HOME ROUTE 

// // app.get('/', function(req, res) {
// //     //ACCES DATABASE if needed
// //     //make some logic based off what is inside of request
// //     //access an API and return some data
// //     //send a respose at the end
// //     res.send('Hello, World!');
// // });


// // //make an onother route here
// // app.get('/sei', (req, res) => {
// //     res.send('SEI 412');
// // })
// // app.get('/sei', sei);

// // app.get('/rockets', (req, res) => {
// //     //acees an API and return some data
// //     axios.get('https://api.spacexdata.com/v3/rockets')
// //     .then((response) => {
// //         //within this block of code
// //         //start
// //         console.log(response.data);
// //         // res.send('Rockets');
// //         res.json(response.data)
// //         //finish
// //     })
// //     .catch(error => {
// //         console.log(error);//no
// //     })
    
// // })

// // const PORT = process.env.PORT || 8000;
// // app.listen(PORT, () => {
// //     console.log(`Server is listeneing on ${PORT}`)
// // });

// // //or it could be just    app.listen(8000);
// // // app.listen(8000, () => {
// // //     console.log(`Server is listening on Port 8000`);
// // // });





// // Imports
// const express = require('express');
// const app = express(); // instance of the app
// const axios = require('axios');
// // Home route
// app.get('/', function(req, res) {
//     // access a database if needed
//     // make some logic based off what is inside of request
//     // access an API and return some data
//     // send a response at the end
//     res.send('Hello World!');
// });
// // const sei = (req, res) => {
// //     res.send('SEI 412');
// // }
// // app.get('/sei', sei);

  


// app.get('/rockets', (req, res) => {
//     // access an API and return some data
//     axios.get('https://api.spacexdata.com/v3/rockets')
//     .then((response) => {
//         // within this block of code
//         // ---- start -----
//         console.log(response.data);
//         res.json(response.data);
//         // ---- finish -----
//     })
//     .catch(error => {
//         console.log(error);
//     })
// })
// //or app.get('/greet/:name', (req, res) => {
// app.get('/:name', (req, res) => {
//     console.log(req.params);
//     res.send(`Hello ${req.params.name}`);
//   });



//       app.get('/github/:username', (req, res) => {
//         const { username } = req.params; // destructuring
//         axios.get(`https://api.github.com/users/${username}`)
//         .then(response => {
//             console.log(response.data);
//             res.json(response.data);
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     });






//     //import to be last , this is for any route not listed to return an 404 error
// app.get('/*', (req, res) => {
//     // console.log(req.prams);
//     res.send(`404`);
// });


// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server is listening on ${PORT} 🎧`);
// });



// Imports
const express = require('express');
const app = express(); // instance of the app
const axios = require('axios');

// Home route
app.get('/', function(req, res) {
    // access a database if needed
    // make some logic based off what is inside of request
    // access an API and return some data
    // send a response at the end
    res.send('Hello World!');
});



// const sei = (req, res) => {
//     res.send('SEI 412');
// }

// app.get('/sei', sei);


app.get('/rockets', (req, res) => {
    // access an API and return some data
    axios.get('https://api.spacexdata.com/v3/rockets')
    .then((response) => {
        // within this block of code
        // ---- start -----
        console.log(response.data);
        res.json(response.data);
        // ---- finish -----
    })
    .catch(error => {
        console.log(error);
    })
})

app.get('/greet/:name', (req, res) => {
    console.log(req.params); // req.params (object) => :name
    res.send(`Hello ${req.params.name}`);
});

app.get('/github/:username', (req, res) => {
    const { username } = req.params; // destructuring
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
        console.log(response.data);
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

// IMPORTANT: Make last route
app.get('/*', (req, res) => {
    
    res.send('404');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} 🎧`);
});

