const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const users = require("./routes/api/users");
const assets = require("./routes/api/assets");
const tasks = require("./routes/api/tasks");
const routines = require("./routes/api/routines");

const app = express();
// DB Config
const uri = 'mongodb://NicolasNino:233E169D@cluster0-shard-00-02-arsqt.mongodb.net:27017:27017,cluster0-shard-00-01-arsqt.mongodb.net:27017,cluster0-shard-00-00-arsqt.mongodb.net:27017/MERN?ssl=true&authSource=admin&retryWrites=true';
// Connect to MongoDB
mongoose.connect(
    uri, 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}
)
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

// Bodyparser middleware
app.use(
    express.urlencoded({
      extended: false
    })
);
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/assets", assets);
app.use("/api/tasks", tasks);
app.use("/api/routines", routines);


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on  http://localhost:${port} !`));