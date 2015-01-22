var express = require("express")
var app = express();

var celebs = {
"celeb1": {
  "profession": "star",
  "known_for": ["television show", "emergency room drama"],
  "gender": "female",
  "first letter of first name": "x",
  "extra hint": "Time Out!"
},
"celeb2": {
  "profession": "star",
  "known_for": ["television show", "emergency room drama"],
  "gender": "male",
  "first letter of first name": "y",
  "extra hint": "Time Out!"
},
"celeb3": {
  "profession": "star",
  "known_for": ["television show", "emergency room drama"],
  "gender": "female",
  "first letter of first name": "z",
  "extra hint": "Time Out!"
},

}

var winLose = {

}

var counter = 0
var keys = Object.keys(celebs);
app.get("/", function(req, res) {
  if (counter === keys.length) {
    counter = 0
    res.json({"results": celebs[keys[counter]]})
    counter++;
  } else {
    console.log(keys);
    res.json({"results": celebs[keys[counter]]})
    counter++
  }
});

app.get("/:input", function(req,res) {
  var request = req.params.input.toLowerCase();
  console.log(request)
  // if (request === keys[counter-1])

})



app.listen(3000);
console.log("listening on port 3000!")
