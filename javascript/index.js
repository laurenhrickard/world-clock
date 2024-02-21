// Los Angeles
function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss"
  )} <small>${losAngelesTime.format("A")}</small>`;

  // London

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = `${londonTime.format(
    "h:mm:ss"
  )} <small>${londonTime.format("A")}</small>`;

  // Perth

  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector(".date");
  let perthTimeElement = perthElement.querySelector(".time");
  let perthTime = moment().tz("Australia/Perth");
  perthDateElement.innerHTML = perthTime.format("MMMM Do YYYY");
  perthTimeElement.innerHTML = `${perthTime.format(
    "h:mm:ss"
  )} <small>${perthTime.format("A")}</small>`;
}
updateTime();
setInterval(updateTime, 1000);
