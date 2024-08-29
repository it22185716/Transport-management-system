const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// express app
const app =express();

//import routes
const postRoutes=require('./routes/posts');

//app middleware
app.use(bodyParser.json());

//route midlewear
app.use(postRoutes);

const PORT=4000;
const DB_URL='mongodb+srv://wgil:wgil1234@mernapp.tmfbj.mongodb.net/?retryWrites=true&w=majority&appName=mernApp';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection err',err));


// listen for requests
app.listen(PORT, () => {
 console.log(`App is running on ${PORT}`);
});
