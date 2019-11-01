const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes/taskRoutes');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({type: 'application/javascript'}));

routes(app);

app.listen(port, () => {
    console.log('API server started on: ' + port);
});


process.on('exit', (code) => {
    // do one final synchronous operation
    // before the node process terminates
    console.log(`Mayday-Mayday we have a problem...`);
    console.log(`The application has ended with code ${code}`);
})