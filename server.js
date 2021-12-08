const JSONdb = require('simple-json-db');
const island_gen_db = new JSONdb("./DB/island_gen_db.json");
const fps_log_db = new JSONdb("./DB/fps_log_db.json");

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const cors = require("cors")
app.use(
    cors({
        origin: "*"
    })
)

const path = require("path")

const IslandGenLog = require("./Data").IslandGenLog;

app.get('/add_log/island_gen', (req, res) => {
    SaveLog(req, res, island_gen_db)
})
app.get('/add_log/fps', (req, res) => {
    SaveLog(req, res, fps_log_db)
})

app.use("/DB", express.static(path.join(__dirname, "/DB")))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

function SaveLog(req, res, db){
    if(db == undefined || req == undefined || res == undefined) return;
    let result = "error"
    if(req.query.data && req.query.data != null && req.query.data != ""){
        let dt_obj = JSON.parse(req.query.data)
        let device_log = JSON.parse(dt_obj.deviceLog)
        dt_obj.deviceLog = device_log
        db.set(Date.now(), dt_obj);
        result = "logged"
    }
    console.log(result)
    res.send(result)
}

console.log(JSON.stringify(new IslandGenLog()));