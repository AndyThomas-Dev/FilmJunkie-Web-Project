var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db/MyDb.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            surname text,
            country text, 
            subject text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, surname, country, subject) VALUES (?,?,?,?)'
                db.run(insert, ["Test","Tempa","USA","Hello world!"])
            }
        });  
    }
});


module.exports = db
