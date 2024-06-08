(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    // Set your target date and time here
    let targetDate = new Date("06/08/2024 10:02:00"); // Format: MM/DD/YYYY HH:MM:SS
    
    const countDown = targetDate.getTime(),
          x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          // Do something when the target date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "The countdown has ended!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
        }, 1000); // Update every second
})();
