const Sugar = require('sugar-date');

module.exports = function processRequest(input) {
  var dateObj = {
    unix: null,
    natural: null,
  }
  var isUnix = false;
  var myDate;
  
  if (!input.match(/\D/) && !input.match(' ') && !input.match('-') ) {
    console.log('inside unix');
    isUnix = true;
    myDate = Sugar.Date.create(Number(input) * 1000);//convert unix time input into milliseconds
  } else {
    console.log('inside non-unix');
    myDate = Sugar.Date.create(input);
  } 

  console.log("myDate", myDate);

  if (myDate == 'Invalid Date') {
    return dateObj;
  } else {

    isUnix ? dateObj.unix = Number(input) : dateObj.unix = Date.UTC(myDate.getFullYear(), myDate.getMonth(), myDate.getDate()) / 1000;
    
    var monthArray = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    dateObj.natural = `${monthArray[myDate.getUTCMonth()]} ${myDate.getUTCDate()}, ${myDate.getUTCFullYear()}`;

    return dateObj;
  }

}


















/*

var dateObj;
  var isUnix = false;
fd
  var obj = {
    unix: null,
    natural: null,
  };

  if (!input.match(/\D/) && !input.match(' ') && !input.match('-')) {
    dateObj = new Date(0);
    dateObj.setUTCMilliseconds(Number(input));
    isUnix = true;
  } else {
    dateObj = Sugar.Date.create(input);
  }

  if (dateObj == 'Invalid Date') {
    console.log('inside if');
    obj.dateObj = dateObj;
    return obj;

  } else {
    console.log('inside else');
    if (isUnix) {
      obj.unix = Number(input)
    } else {
      var natDate = Date(0);
      natDate = Date.UTC(dateObj.getFullYear(), dateObj.getMonth() + 1, dateObj.getDate()) / 1000;
      obj.unix = natDate;
    }
    var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    obj.natural = `${monthArray[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    obj.dateObj = dateObj;
    return obj;
  }

*/