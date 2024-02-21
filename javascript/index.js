// Los Angeles
function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "h:mm:ss"
    )} <small>${losAngelesTime.format("A")}</small>`;
  }
  // London

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = `${londonTime.format(
      "h:mm:ss"
    )} <small>${londonTime.format("A")}</small>`;
  }
  // Perth

  let perthElement = document.querySelector("#perth");
  if (perthElement) {
    let perthDateElement = perthElement.querySelector(".date");
    let perthTimeElement = perthElement.querySelector(".time");
    let perthTime = moment().tz("Australia/Perth");
    perthDateElement.innerHTML = perthTime.format("MMMM Do YYYY");
    perthTimeElement.innerHTML = `${perthTime.format(
      "h:mm:ss"
    )} <small>${perthTime.format("A")}</small>`;
  }
}
function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss "
          )}<small>${cityTime.format("A")}</small></div>
        </div> <a href="/">All cities</a>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
