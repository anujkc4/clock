const clock = document.querySelector("#clock");

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  console.log(date)
}, 1000);
