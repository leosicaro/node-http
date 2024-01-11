const http = require(`node:http`)

const data = require("./data")

const literalString = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primer Renderizado node</title>
</head>
<body>
<h1>titulo: ${data.matrix.title}</h1>
<h2>Pais de origen : ${data.matrix.country}</h2>
<h3>idioma: ${data.matrix.language}</h3>
</body>
</html>
`



const server = http.createServer((req,res)=>{
    console.log(`request received`)
    res.end(literalString)
})

server.listen(3000,()=>{
    console.log(`server listening on port ${server.address().port}`)
   
})