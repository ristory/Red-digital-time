exports.at = at;

//
// Rewrite this file as needed.
//
let date = require('date-and-time');

function at(hours, minutes) {

  let a = hours;
  let b = minutes;
  
  let now;
 
  if(typeof a !== "undefined" && typeof b !== "undefined")
  {
    now = new Date(2019,9,4,a,b);
  }
  else if(typeof a !== "undefined")
  {
    now = new Date(2019,9,4,a,0);
  }
  else if(typeof b !== "undefined")
  {
    now = new Date(2019,9,4,0,b);
  }
  return date.format(now, 'HH:mm');
};

function plus()
{
  
}
