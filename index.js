const express = require('express');

const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded()); // need this instead of app.use(bodyParser.urlencoded({extended: true}));

app.listen(port);

app.get('/',(req,res)=>{
    res.send('stripe payment server is listening on port' + port);
})
