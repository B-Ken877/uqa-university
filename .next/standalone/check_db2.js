const db = require("better-sqlite3")("data/uqa.db");
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
console.log("Tables:", JSON.stringify(tables));
for (const t of tables) {
  const info = db.prepare("PRAGMA table_info(" + t.name + ")").all();
  const count = db.prepare("SELECT COUNT(*) as c FROM " + t.name).get().c;
  console.log("\n--- " + t.name + " (" + count + " rows) ---");
  console.log("Columns:", info.map(i => i.name).join(", "));
  if (count > 0 && count <= 30) {
    const rows = db.prepare("SELECT * FROM " + t.name + " LIMIT 3").all();
    console.log("Sample:", JSON.stringify(rows, null, 2));
  }
}
db.close();