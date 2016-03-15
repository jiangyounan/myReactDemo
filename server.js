/* global __dirname */
/**
 * Created by xuqi on 15/10/12.
 */
const express = require('express');
const port = 8082;
const app = express();
app.use(express.static(__dirname + '/src/endpoint'));

// app.get('/', function(request, response){
//     response.sendFile(__dirname+'/src/endpoint/index.html');
// });

app.listen(port);
console.log("server started on port " + port);
