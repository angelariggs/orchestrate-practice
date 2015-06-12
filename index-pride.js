var config = require('./config')
var db = require('orchestrate')(config.dbKey)
var fs = require('fs')

//put loops into a function so I can just comment out the function call on line 37, instead of having to comment out all of my code.
function chapterLoop() {
  //applies to chapters 01-09
  for (var i = 1; i < 10; i++) {
    var j = "0" + i;
    readAndPutChapter(j)
  }
  //applies to chapters 10-61
  for (var i = 10; i <= 61; i++) {
    readAndPutChapter(i);
  }  
}
//using fs to read the P&P file for each chapter
function readAndPutChapter(i) {
  var currentChapter;
  fs.readFile("../Pride-And-Prejudice/chapter-" + i, {encoding: "utf8"}, function(error, currentChapter) {
    //creating key "chapter" + i for collection "pride-prejudice; the +i means that i'm creating a separate object in the collection for each chapter"
    db.put("pride-prejudice", "chapter" + i, {
      "chapterNum": i,
      "text": currentChapter
    })
    .then(function(res) {
      console.log("success")
    })
    .fail(function(err) {
      console.log("try again")
    })
  })// closes readfile
  return readAndPutChapter;
};// closes function readAndPutChapter

//runs the for loops
// chapterLoop();


function findNerves (chapter) {
  return chapter.match(/nerves/g).length
}

db.search('pride-prejudice', 'value.text:"nerves"')
.then(function(result) {
  var chapterText;
  var nerveOccurs = {};
  var chapArray = result.body.results
    for (chapCount=0; chapCount < chapArray.length; chapCount++) {
      chapterText = chapArray[chapCount].value.text
      var chapterNum = chapArray[chapCount].value.chapterNum
      var count = findNerves(chapterText)
      nerveOccurs[chapterNum] = count
    }
    console.log(nerveOccurs);
  });

function findWomen (chapter) {
  return chapter.match(/Mary/g)
}

// db.search('pride-prejudice', 'value.text:"Mary"AND NOT "Lydia"')
//   .then











