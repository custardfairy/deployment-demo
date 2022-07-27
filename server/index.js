const express = require('express')
const path = require('path')
const app = express()

app.get('/', function(req, res) {
    // the following makes index.html run on a server
    res.sendFile(path.join(__dirname, "../index.html"));
})

// gets the port from heroku, or uses 4005
const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})



