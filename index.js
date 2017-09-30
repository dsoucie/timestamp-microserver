const express = require('express');

var app = express();

app.get('/:input', (request, response) => {
  var input = request.params.input;
  
  var obj = {
    input,
    unix: null,
    natural: null
  }

  //find out if potential natural date (contains ' ' or '-')
  if (input.match(' ') || input.match('-')) {
    console.log('inside match');
    //handle potential natural date here
  } else if (!input.match(/\D/)) { //if theres a letter, its also not unix
    
    console.log('inside else if');

    var inputDate = new Date(Number(input)*1000);
    var inputDateMonth = inputDate.getMonth() + 1;
    var inputDateDate = inputDate.getDate();
    var inputDateYear = inputDate.getFullYear();

    switch (inputDateMonth) {
      case 1:
        inputDateMonth = "January";
        break;
      case 2:
        inputDateMonth = "February";
        break;
      case 3:
        inputDateMonth = "March";
        break;
      case 4:
        inputDateMonth = "April";
        break;
      case 5:
        inputDateMonth = "May";
        break;
      case 6:
        inputDateMonth = "June";
        break;
      case 7:
        inputDateMonth = "July";
        break;
      case 8:
        inputDateMonth = "August";
        break;
      case 9:
        inputDateMonth = "September";
        break;
      case 10:
        inputDateMonth = "October";
        break;
      case 11:
        inputDateMonth = "November";
        break;
      case 12:
        inputDateMonth = "December";
        break;
    }


    obj.natural = `${inputDateMonth} ${inputDateDate}, ${inputDateYear}`;

    obj.unix = Number(input);
  }

  response.json(obj)
}) 
app.listen(7777);