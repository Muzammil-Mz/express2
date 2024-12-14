import express from "express";
const app = express()
const port = 5008

app.use(express.json())

app.get("/", (req, res) => {
    try {
        res.status(200).json("Hello world")
    } catch (error) {
        console.log(err);

    }
})


app.post("/register", (req, res) => {
    try {
        let userinput = req.body
        console.log(userinput);
        res.status(200).json(userinput)
    } catch (err) {
        console.log(err);

    }
})




app.listen(port, () => {

    console.log(`sever is up and running at ${port} `);
})