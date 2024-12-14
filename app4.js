import axios from "axios"

async function apicall() {
    try {
        let responce = await axios.get("https://jsonplaceholder.typicode.com/posts")
        let finaldata = responce.data
        console.log(finaldata);
        finaldata.map((x)=>console.log(x.id))
        





    } catch (error) {
console.log(error);

    }

}

apicall()