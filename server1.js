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

}

app.get("/", function(req, res) {
    res.json({"results": celebs.celeb1})
});

app.get("/:input", function(req,res) {
  var request = req.params.input.toLowerCase();
  console.log(request)
  if (request === "celeb_1") {
    res.send({correct:"Yup! You Win!"})
  } else {
    res.send({incorrect:"nope! keep going."})
  }
})

app.listen(3000);
console.log("listening on port 3000!")
