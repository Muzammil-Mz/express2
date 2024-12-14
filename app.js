import express from "express"
const app = express()
const port = 5007
app.use(express.json())

app.get("/", (req, res) => {
    try {
        res.status(200).send("Hello world")


    } catch (error) {
        console.log(error);
 

    }
})


app.post("/register", ((req, res) => {
    try {
        let userinput = req.body
        console.log(userinput);

        res.status(200).json({ message: "registered" })// OR res.status(200).json.userinput --- to show output in postman
    } catch (err) {
        console.log(err);

    }
}))


app.listen(port, () => {
    console.log("listening");

})