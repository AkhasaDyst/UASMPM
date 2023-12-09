var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lacook_uas",
});

con.connect(function (err) {
  if (err) throw err;
  var sql =
    "UPDATE tbl_mahasiswa SET mahasiswa = 'LUKI' WHERE nim = '21060117120025'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " Tabel sudah updated");
  });
});
