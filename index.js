
// xx - make command line util too

module.exports = function(jsonString){
  'use strict';
  return JSON.stringify(JSON.parse(jsonString), null, ' ');
};
