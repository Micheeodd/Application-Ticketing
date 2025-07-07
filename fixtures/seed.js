require('dotenv').config();
const pool=require('../src/db');
(async()=>{
await pool.query(`CREATE TABLE IF NOT EXISTS types(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50) UNIQUE)`);
await pool.query(`CREATE TABLE IF NOT EXISTS tickets(id INT AUTO_INCREMENT PRIMARY KEY,type_id INT,email VARCHAR(100),message TEXT,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY(type_id) REFERENCES types(id))`);
const count=await pool.query('SELECT COUNT(*) c FROM types');
if(count[0].c==0){
await pool.query('INSERT INTO types(name) VALUES (?) , (?) , (?)',['bug','question','suggestion']);
}
process.exit(0);
})();
