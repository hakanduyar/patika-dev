let userName = prompt("Lütfen Adınızı Giriniz!");
let myName = document.querySelector("#myName");
let formattedName = userName.charAt(0).toUpperCase() + userName.slice(1);
myName.innerHTML = ` ${formattedName}`;

let myClock = document.querySelector("#myClock");

function tarihSaat() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "Europe/Istanbul",
  };
  let date = new Date().toLocaleString("tr-TR", options);

  myClock.innerHTML = `${date}`;
}

setInterval(tarihSaat, 1000);
