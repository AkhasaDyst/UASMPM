var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lacook_uas",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "INSERT INTO tbl_mahasiswa (nim, mahasiswa) VALUES ('21060117120025', 'IVAN'),('21060117120026', 'SALSA'),('21060117120027', 'BILA'),('21060117120021', 'JOKO')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
