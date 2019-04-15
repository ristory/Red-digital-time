exports.at = at;
exports.plus = plus;
//
// Rewrite this file as needed.
//
let date = require('date-and-time');
let a;
let b;
function at(hours, minutes,) {
  a = hours;
  b = minutes;
  
  let now;

  if (typeof a !== "undefined" && typeof b !== "undefined") {
    now = new Date(2019, 9, 4, a, b);
  }
  else if (typeof a !== "undefined") {
    now = new Date(2019, 9, 4, a, 0);
  }
  else if (typeof b !== "undefined") {
    now = new Date(2019, 9, 4, 0, b);
  }

  return date.format(now, 'HH:mm');
 
};

Number.prototype.plus = function (n) {
  return this + n;
};  

function plus(c,) {
  return c;
}


