require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('bufferTimeoutMS', 1500);
const app = require('./src/app');
app.listen(5050, () => console.log('test server up on 5050'));
