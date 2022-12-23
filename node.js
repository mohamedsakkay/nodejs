/************ create server ****************** */
// let http = require ('http');
// let fs = require ('fs')
// let server = http.createServer (function(req,res){
//     let data = JSON.parse(fs.readFileSync('node.json'))
//     console.log(data)
//     res.end (data.name+" "+data.age+" "+data.hobbie+" "+data.username)

// })
// server.listen(8080)

/************(export) create the file .txt ****************** */
// let fs = require ('fs')
// let tab = [{prenom : "simo", pseudo :"skimo", age :24}, {prenom : "ayoub", pseudo :"bodybuilding", age :23}]
// fs.writeFileSync ('data.txt', JSON.stringify(tab))

/************(export) create the file .json ****************** */
// let fs = require ('fs')
// let tab = [{prenom : "simo", pseudo :"skimo", age :24}, {prenom : "ayoub", pseudo :"bodybuilding", age :23}]
// tab.push ({prenom : "XXXX", pseudo :"XXX", age :"XX"})
// fs.writeFileSync ('data.json', JSON.stringify(tab))


// /*************(import) read ***************** */
// let fs = require ('fs')
// let data = fs.readFileSync ('data.json', "utf8")
// console.log (data)