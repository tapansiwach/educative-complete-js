const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter month number: ", monthNumber => {
  monthNumber = Number(monthNumber);
  switch (monthNumber) {
    case 1:
      console.log("Number of days: 31");
      break;
    case 2:
      console.log("Number of days: 28");
      break;
    case 3:
      console.log("Number of days: 31");
      break;
    case 4:
      console.log("Number of days: 30");
      break;
    case 5:
      console.log("Number of days: 31");
      break;
    case 6:
      console.log("Number of days: 30");
      break;
    case 7:
      console.log("Number of days: 31");
      break;
    case 8:
      console.log("Number of days: 31");
      break;
    case 9:
      console.log("Number of days: 30");
      break;
    case 10:
      console.log("Number of days: 31");
      break;
    case 11:
      console.log("Number of days: 30");
      break;
    case 12:
      console.log("Number of days: 31");
      break;
    default:
      console.log("unknown month number");
  }
  readline.close();
});