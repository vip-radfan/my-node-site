const express = require("express");
const app = express();
app.get("/", (req, res) => {
res.send("🔥 السيرفر شغال 24/7");
}); 
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log("Running...");
});     
