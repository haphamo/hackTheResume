const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});