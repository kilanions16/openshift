var express = require ('express');
var app =express ();
//sert les fichiers a partir du repertoire racine
app.use(express.static('./'));
app.listen(8080, function (){
console.log('Listening at http://localhost:8080' );
});
