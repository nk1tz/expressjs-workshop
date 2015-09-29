var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
// END Server BoilerPlate


app.use(bodyParser());



app.post('/entry', function (req, response) {

    console.log( req.body );
    

});









app.get('/entry/:search', function (req, res) {
    
    var searchQuery = req.query;
    console.log( entries[3].emails.forEach(function (el,index){ if(el.address.indexOf(searchQuery.lastName) >= 0) return true; } ) );
    
    console.log(   entries[3].emails.forEach(  function(el,index){ return el.address.indexOf(searchQuery.lastName) }  )   );
    // var name1 = searchParams.slice( searchParams.indexOf("=") + 1, searchParams.indexOf("&") - 1 );
    // var name2 = searchParams.slice( searchParams.indexOf( "=", searchParams.indexOf("&") ) + 1, searchParams.length);
   
    var entryMatches = entries.filter(function(ele,ind){
        return ( searchQuery.firstName===ele.firstName || searchQuery.lastName===ele.lastName || searchQuery.firstName===ele.firstName || searchQuery.lastName===ele.lastName );
    });
    console.log(entryMatches);
    res.send(entryMatches);
});

// || ele.emails.forEach(function (el,index){ return el.address.indexOf(searchQuery.firstName) }) >= 0 || ele.emails.forEach(function (el,index){ return el.address.indexOf(searchQuery.lastName) }) >= 0 );




var entries = [
    {
        firstName: 'John',
        lastName: "Smith",
        emails: [
            {type: 'home', address: 'john@smith.com'},
            {type: "work", address: "jsmith@megacorp.com"}
        ]
    },
    {
        firstName: 'Kayla',
        lastName: "Nadeau",
        emails: [
            {type: 'home', address: 'Kayla@sass.com'},
            {type: "work", address: "Kayla@megacorp.com"}
        ]
    },
    {
        firstName: 'Martin',
        lastName: "Greg",
        emails: [
            {type: 'home', address: 'Greg@fusion.com'},
            {type: "work", address: "MartinGreg@megacorp.com"}
        ]
    },
    {
        firstName: 'Jules',
        lastName: "Calipso",
        emails: [
            {type: 'home', address: 'Verne@fusion.com'},
            {type: "work", address: "JulesVernes@megacorp.com"}
        ]
    }
];
