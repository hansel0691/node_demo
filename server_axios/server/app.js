const express = require('express');


// ! Creates express app instance
const app = express();
const staticPath = __dirname + '/public';

// app.use([path,] callback [, callback...])
//! Mounts the specified middleware function or functions at the specified path
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(require('./middleware'))

// ! Loads routing from controllers
app.use(require('./controller'));

// ! Define public static paths
app.use(express.static(staticPath));



app.listen(3000);
