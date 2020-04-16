const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.get('/', function (req, res) {
  res.json('Hello World')
})
 
app.listen(PORT, () => {
  console.log(Server is running on port: `${PORT}`);
});