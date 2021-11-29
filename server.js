const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/css', express.static(__dirname + 'public/js'));
app.use('/css', express.static(__dirname + 'public/images'));

app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", function(request, response){
    response.render('index');
});

app.listen(3000, function(){

    console.log("Server started on port 3000");

});