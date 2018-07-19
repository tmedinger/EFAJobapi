require('dotenv').config();
const express = require('express'); 
const app = express(); 
require('./routes');

app.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}`));
