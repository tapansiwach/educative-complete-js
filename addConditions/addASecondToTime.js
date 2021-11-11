const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter the hours: ", hours => {
  readline.question("Enter the minutes: ", minutes => {
    readline.question("Enter the seconds: ", seconds => {
      hours = Number(hours)
      minutes = Number(minutes)
      seconds = Number(seconds)

      let totalSeconds = hours * 3600 + minutes * 60 + seconds;
      totalSeconds++;

      hours = Math.floor(totalSeconds / 3600);
      totalSeconds -= hours * 3600;

      minutes = Math.floor(totalSeconds / 60);
      totalSeconds -= minutes * 60;

      seconds = totalSeconds;

      console.log(`Time after one second: ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`);

      readline.close();
    })
  })
});