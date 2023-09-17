function show_clock() {
  let h = document.getElementsByClassName("hr")[0];
  let m = document.getElementsByClassName("mn")[0];
  let s = document.getElementsByClassName("se")[0];

  let date = new Date();

  let hours = date.getHours();
  let mintues = date.getMinutes();
  let second = date.getSeconds();

  h.style.transform = `rotate(${30 * hours + mintues / 2}deg)`;
  m.style.transform = `rotate(${6 * mintues}deg)`;
  s.style.transform = `rotate(${6 * second}deg)`;

  let sound = new Audio("sound.mp3");
  sound.play();
}

setInterval(show_clock, 1000);
