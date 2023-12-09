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
  //var sql = "CREATE TABLE tbl_mahasiswa (nim bigint, mahasiswa VARCHAR(255))";
  //var sql = "CREATE TABLE tbl_agama (id_agama int(3), agama VARCHAR(255))";
  //var sql = "CREATE TABLE tbl_status (id_status int(3), status VARCHAR(255))";
  var sql =
    "CREATE TABLE tbl_dosen (NIP bigint, Dosen VARCHAR(255), agama int(3), status int(3), FOREIGN KEY (agama) REFERENCES tbl_agama(id_agama), FOREIGN KEY (status) REFERENCES tbl_status(id_status))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
