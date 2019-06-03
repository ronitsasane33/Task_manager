const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient

const URL = "mongodb://127.0.0.1/27017"
const dbname = "db2"

mongoClient.connect(URL, {useNewUrlParser:true }, (error, client)=>{
    if(error){
        return console.log("fuck mann")
    }

    const db = client.db(dbname)
    db.collection("profile").insertMany([{
        name: "bbb",
        age: 20
    }, {
        name: "ccc",
        age: 29
    }], (error, results)=>{
        if(error){
            return console.log(error)
        }

        console.log(results.ops)
    })
})