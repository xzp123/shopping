var mysql      = require('mysql');
function conn() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'shopping',
        multipleStatements: true//开启mysql可以同时执行多条语句
    });
    connection.connect();
    return connection;
}

function end(){

}

module.exports = {conn,end};