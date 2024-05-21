let myslq = require("mysql");

let conexion = myslq.createConnection({
    host: "Mysql@127.0.0.1:3306",
    database: "root",
    user: "Cunistas",
    password: "123456"
});

