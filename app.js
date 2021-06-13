const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const unirest = require("unirest");
const req = unirest("POST", "https://sameer-kumar-aztro-v1.p.rapidapi.com/");
const request = require('request');
const _ = require ("lodash")
// const definedDate = require(__dirname + "/date.js")

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

req.headers({
  "x-rapidapi-key": "6c4d0eae43msh6a06773c0139e16p17423djsnc9446239dd8b",
  "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
  "useQueryString": true
});

app.get("/", function(req, res) {
  res.render("index");
})

app.post("/", function(req, res) {
  const post = {
    name: req.body.nameOfPerson,
    date: req.body.dateOfBirth,
    day: req.body.day
  };
  var newDay = post.day
  var oldDate = post.date
  var newDate = oldDate.split("-").reverse().join("/");
  D_main = newDate.split("/");
  const year = D_main[2]
  // console.log(year);

  //////////////////// Dates ///////////////////////////////
  var Date_to_check = newDate;

  // Aries //
  var Date_lower_aries = "21/03/" + year;
  var Date_higher_aries = "20/04/" + year;
  // Taurus //
  var Date_lower_taurus = "21/04/" + year;
  // Gemini //
  var Date_higher_taurus = "21/05/" + year;
  var Date_lower_gemini = "22/05/" + year;
  var Date_higher_gemini = "21/06/" + year;
  // Cancer //
  var Date_lower_cancer = "22/06/" + year;
  var Date_higher_cancer = "22/07/" + year;
  // Leo //
  var Date_lower_leo = "23/07/" + year;
  var Date_higher_leo = "21/08/" + year;
  // Virgo //
  var Date_lower_virgo = "22/08/" + year;
  var Date_higher_virgo = "23/09/" + year;
  // Libra //
  var Date_lower_libra = "24/09/" + year;
  var Date_higher_libra = "23/10/" + year;
  // Scorpio //
  var Date_lower_scorpio = "24/10/" + year;
  var Date_higher_scorpio = "22/11/" + year;
  // Saggittarius //
  var Date_lower_sagittarius = "23/11/" + year;
  var Date_higher_saggitarius = "22/12/" + year;
  // Capricorn //
  var Date_lower_capricorn = "23/12/" + year;
  var Date_higher_capricorn = "20/01/" + year;
  // Aquarius //
  var Date_lower_aquarius = "21/01/" + year;
  var Date_higher_aquarius = "19/02/" + year;
  // Pisces //
  var Date_lower_pisces = "20/02/" + year;
  var Date_higher_pisces = "20/03/" + year;

  ////////////////////////////////////////

  function Run() {

    D_1 = Date_lower_aries.split("/");
    D_2 = Date_higher_aries.split("/");
    D_3 = Date_lower_taurus.split("/");
    D_4 = Date_higher_taurus.split("/");
    D_5 = Date_lower_gemini.split("/");
    D_6 = Date_higher_gemini.split("/");
    D_7 = Date_lower_cancer.split("/");
    D_8 = Date_higher_cancer.split("/");
    D_9 = Date_lower_leo.split("/");
    D_10 = Date_higher_leo.split("/");
    D_11 = Date_lower_virgo.split("/");
    D_12 = Date_higher_virgo.split("/");
    D_13 = Date_lower_libra.split("/");
    D_14 = Date_higher_libra.split("/");
    D_15 = Date_lower_scorpio.split("/");
    D_16 = Date_higher_scorpio.split("/");
    D_17 = Date_lower_sagittarius.split("/");
    D_18 = Date_higher_saggitarius.split("/");
    D_19 = Date_lower_capricorn.split("/");
    D_20 = Date_higher_capricorn.split("/");
    D_21 = Date_lower_aquarius.split("/");
    D_22 = Date_higher_aquarius.split("/");
    D_23 = Date_lower_pisces.split("/");
    D_24 = Date_lower_pisces.split("/");
    D_main = Date_to_check.split("/");

    var d1 = new Date(D_1[2], parseInt(D_1[1]) - 1, D_1[0]);
    var d2 = new Date(D_2[2], parseInt(D_2[1]) - 1, D_2[0]);
    var d3 = new Date(D_3[2], parseInt(D_3[1]) - 1, D_3[0]);
    var d4 = new Date(D_4[2], parseInt(D_4[1]) - 1, D_4[0]);
    var d5 = new Date(D_5[2], parseInt(D_5[1]) - 1, D_5[0]);
    var d6 = new Date(D_6[2], parseInt(D_6[1]) - 1, D_6[0]);
    var d7 = new Date(D_7[2], parseInt(D_7[1]) - 1, D_7[0]);
    var d8 = new Date(D_8[2], parseInt(D_8[1]) - 1, D_8[0]);
    var d9 = new Date(D_9[2], parseInt(D_9[1]) - 1, D_9[0]);
    var d10 = new Date(D_10[2], parseInt(D_10[1]) - 1, D_10[0]);
    var d11 = new Date(D_11[2], parseInt(D_11[1]) - 1, D_11[0]);
    var d12 = new Date(D_12[2], parseInt(D_12[1]) - 1, D_12[0]);
    var d13 = new Date(D_13[2], parseInt(D_13[1]) - 1, D_13[0]);
    var d14 = new Date(D_14[2], parseInt(D_14[1]) - 1, D_14[0]);
    var d15 = new Date(D_15[2], parseInt(D_15[1]) - 1, D_15[0]);
    var d16 = new Date(D_16[2], parseInt(D_16[1]) - 1, D_16[0]);
    var d17 = new Date(D_17[2], parseInt(D_17[1]) - 1, D_17[0]);
    var d18 = new Date(D_18[2], parseInt(D_18[1]) - 1, D_18[0]);
    var d19 = new Date(D_19[2], parseInt(D_19[1]) - 1, D_19[0]);
    var d20 = new Date(D_20[2], parseInt(D_20[1]) - 1, D_20[0]);
    var d21 = new Date(D_21[2], parseInt(D_21[1]) - 1, D_21[0]);
    var d22 = new Date(D_22[2], parseInt(D_22[1]) - 1, D_22[0]);
    var d23 = new Date(D_23[2], parseInt(D_23[1]) - 1, D_23[0]);
    var d24 = new Date(D_24[2], parseInt(D_24[1]) - 1, D_24[0]);

    var dmain = new Date(D_main[2], parseInt(D_main[1]) - 1, D_main[0]);

    if (dmain >= d1 && dmain <= d2) {
      var sign = "aries"
      var src="images/aries.jpg"
    } else if (dmain >= d3 && dmain <= d4){
      var sign = "taurus"
      var src="images/taurus.jpg"
    } else if (dmain >= d5 && dmain <= d6){
      var sign = "gemini"
      var src="images/gemini.jpg"
    } else if (dmain >= d7 && dmain <= d8){
      var sign = "cancer"
      var src="images/cancer.jpg"
    } else if (dmain >= d9 && dmain <= d10){
      var sign = "leo"
      var src="images/leo.jpg"
    } else if (dmain >= d11 && dmain <= d12){
      var sign = "virgo"
      var src="images/virgo.jpg"
    } else if (dmain >= d13 && dmain <= d14){
      var sign = "libra"
      var src="images/libra.jpg"
    } else if (dmain >= d15 && dmain <= d16){
      var sign = "scorpio"
      var src="images/scoprio.jpg"
    } else if (dmain >= d17 && dmain <= d18){
      var sign = "saggittarius"
      var src="images/sagi.jpg"
    } else if (dmain >= d19 && dmain <= d20){
      var sign = "capricorn"
    } else if (dmain >= d21 && dmain <= d22){
      var src="images/capricorn.jpg"
      var sign = "aquarius"
      var src="images/aquarius.jpg"
    } else if (dmain >= d23 && dmain <= d24){
      var sign = "pisces"
      var src="images/pisces.jpg"
    };

    var options = {
      url: "https://aztro.sameerkumar.website/?sign=" + sign + "&day=" + newDay,
      method: 'POST'
    };

    function callback(error, response, object) {
      if (!error && response.statusCode == 200) {
        var newObject = JSON.parse(object)
        // console.log(newObject);
      }
      res.render("posts", {
        day: newDay,
        name: post.name,
        sign: _.capitalize(sign),
        desc: newObject.description,
        luckyNo: newObject.lucky_number,
        mood: newObject.mood,
        color: newObject.color,
        compatibility: newObject.compatibility,
        src: src
      })
    }
    request(options, callback);
  }
  Run();
});


app.listen(process.env.PORT || 3000, function() {
  console.log("The server is running on Port 3000");
});
