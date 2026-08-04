const db = require("better-sqlite3")("data/uqa.db");
const admCount = db.prepare("SELECT COUNT(*) as c FROM admissions").get().c;
const admRows = db.prepare("SELECT id, name, email FROM admissions LIMIT 5").all();
console.log("Total admissions:", admCount);
console.log("Sample:", JSON.stringify(admRows, null, 2));
db.close();