const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const days = "monday tuesday wednesday thursday friday saturday sunday".split(" ");

readline.question("Enter Day: ", day => {
  day = day.toLowerCase();
  if (days.includes(day)) {
    const followingDay = (day === "sunday")
      ? "monday"
      : days[days.indexOf(day) + 1];
    console.log(followingDay);
  } else {
    console.log("unknown day")
  }
  readline.close();
});
