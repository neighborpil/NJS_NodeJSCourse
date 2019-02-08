var express = require('express');
var mysql = require('mysql');
var router = express.Router();

function getTime2() {
    return new Promise(function (resolve, reject) {
        connection.query(

        )
    });
}


function getTime(callback) {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sws1234',
        database: 'nodejs'
    });
    connection.connect();
    connection.query('SELECT * from author', function (error, results, fields) {
        if (error) throw error;
        var result = results[0].name;

        console.log('The solution is: ', result);
        return callback(result);
    });
    connection.end();
}


getTime(function (result) {
    _result = result;
    console.log("test" + _result);
});


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render(
        'mysql',
        {
            title: '이수프레두'            
        },
        getTime(callback)
    );
});

module.exports = router;
module.exports = getTime(callback);