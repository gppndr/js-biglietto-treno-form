// info passeggero
const passengerName = document.querySelector("#passengerName");
const travelKm = document.querySelector("#travelKm");
const passengerAge = document.querySelector("#passengerAge");

//info ticket
const userName = document.querySelector("#name");
const ageDiscount = document.querySelector("#ageDiscount");
const cabinNumber = document.querySelector("#cabin");
const cpCode = document.querySelector("#cpCode");
const price = document.querySelector("#finalPrice");

// age discount
const underAgeDiscount = 20;
const adultDiscount = 0;
const overAgeDiscount = 40;
let discount = 0;

//btns
const createTicket = document.querySelector("#createTicket");
const resetPage = document.querySelector("#resetPage");

// inputs
const inputs = document.querySelectorAll("input, select");

// generate ticket

createTicket.addEventListener("click", function () {
  let ticketPrice = travelKm.value * 0.21;
  userName.innerHTML = passengerName.value;

  if (passengerAge.value == "underAge") {
    discount = (ticketPrice / 100) * underAgeDiscount;
    ticketPrice = ticketPrice - discount;
    price.innerHTML = ticketPrice.toFixed(2);
    ageDiscount.innerHTML = `Sconto Minorenni`;
  } else if (passengerAge.value == "overAge") {
    discount = (ticketPrice / 100) * overAgeDiscount;
    ticketPrice = ticketPrice - discount;
    price.innerHTML = ticketPrice.toFixed(2);
    ageDiscount.innerHTML = `Sconto Over 65`;
  } else {
    discount = (ticketPrice / 100) * adultDiscount;
    ticketPrice = ticketPrice - discount;
    price.innerHTML = ticketPrice.toFixed(2);
    ageDiscount.innerHTML = `Nessuno Sconto`;
  }
  cabinNumber.innerHTML = Math.floor(Math.random() * 10) + 1;
  cpCode.innerHTML = Math.floor(Math.random() * 99000);
});

// reset page
resetPage.addEventListener("click", function () {
  inputs.forEach((input) => {
    if (input.type == "text") {
      input.value = "";
    }
  });
  passengerName.value = "";
  userName.innerHTML = "";
  price.innerHTML = "";
  ageDiscount.innerHTML = "";
  cabinNumber.innerHTML = "";
  cpCode.innerHTML = "";
});
