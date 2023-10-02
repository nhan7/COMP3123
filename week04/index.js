var express  = require('express')


const SERVER_PORT = 8089

var app = express()


app.use(express.static("./public"))

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})

// Query Parameter
app.get("/user", (req, res) => {
    if(req.query.fname == undefined){
        res.send("Please send me fname as query parameter")
    }
})
// Path Parameter
app.post("/user/:fname/:lname", (req, res) => {
    const {fname, lname} = req.params
    const user = {
        fname,
        lname,
    }
    res.send(JSON.stringify(user))

})





app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})