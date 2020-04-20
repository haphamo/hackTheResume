const PORT          = 3001;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const fs            = require('fs');

let obj = ""

fs.readFile('./data-files/resumeData.js', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data)
});


app.get('/api/resume-data', function (req, res) {
  
  res.json(obj)
})
 
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});