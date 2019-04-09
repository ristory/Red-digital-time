exports.at = at;

//
// Rewrite this file as needed.
//
let date = require('date-and-time');
let now = new Date();
 

function at(hours, minutes) {
  
  let now = new Date();
  return date.format(now, 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05'
  date.format(now, 'ddd MMM DD YYYY');        // => 'Fri Jan 02 2015'
  date.format(now, 'hh:mm A [GMT]Z');         // => '11:14 p.m. GMT-0800'
  date.format(now, 'hh:mm A [GMT]Z', true); 
};
