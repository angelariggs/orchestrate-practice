var config = require ('./config.js')
var db = require('orchestrate')(config.dbKey)


db.put('jsi-orchestrate', 'angela', {
  "color": "blue",
  "hometown":"Melbourne",
  "school":"Portland Code School"
})
.then(function(res) {
  console.log(res.statusCode);
});

db.newPatchBuilder('jsi-orchestrate', 'angela')
  .add('car', 'Jetta')
  .apply()
  .then(function(result) {
    console.log()
  });

db.put('jsi-orchestrate', 'angela', {
  'partner':'Josh'
})
.then(function() {
  db.get('jsi-orchestrate', 'angela')
  .then(function(res) {
    console.log(res.body);
  })
});


  
