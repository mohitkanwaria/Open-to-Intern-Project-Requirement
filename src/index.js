const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const mongoose  = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://mohitkanwaria_:IZ2vta9qwavx3n0S@cluster0.2byd2qy.mongodb.net/group19Database?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

