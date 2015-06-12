var config = require ('./config.js')
var db = require('orchestrate')(config.dbKey)

/*Puts the prop/values color, hometown, and school into the jsi-orchestrate collection*/
// db.put('jsi-orchestrate', 'angela', {
//   "color": "blue",
//   "hometown":"Melbourne",
//   "school":"Portland Code School"
// })
// .then(function(res) {
//   console.log(res.statusCode);
// });

/*Added prop/val car to the existing collection*/
// db.newPatchBuilder('jsi-orchestrate', 'angela')
//   .add('car', 'Jetta')
//   .apply()
//   .then(function(result) {
//     console.log()
//   });

/*Used in the same way as patchbuilder.*/
// db.put('jsi-orchestrate', 'angela', {
//   'partner':'Josh'
// })
// .then(function() {
//   db.get('jsi-orchestrate', 'angela')
//   .then(function(res) {
//     console.log(res.body);
//   })
// });


  
