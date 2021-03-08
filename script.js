let billTotal = document.querySelector("#billTotal");
let guestAmount = document.querySelector("#guestAmount");
let tipBtn = document.querySelector("#tipBtn");
let results = document.querySelector("#results");
let qos = document.querySelector("#qos");
let tipAmount = document.querySelector("#tipAmount");
let totalBillWithTip = document.querySelector("#totalBillWithTip");
let partySize = document.querySelector("#partySize");

tipBtn.addEventListener("click", function (e) {
  results.style.display = "block";
  let newTotal = Number(billTotal.value);
  let guests = Number(guestAmount.value);

  let service;
  switch (qos.value) {
    case "fair":
      service = 1; //15%
      break;
    case "good":
      service = 2; //20%
      break;
    case "great":
      service = 3; //30%
      break;
    default:
      service = 1; //15%
  }

  if (guests <= 3 && service == 1) {
    partySize.value = "10.00";
    finalBill = newTotal + 10;
    let bill = finalBill * 0.1;
    tipAmount.value = bill.toFixed(2);
    totalBillWithTip.value = (bill + finalBill).toFixed(2);
  } else if (guests <= 3 && service == 2) {
    partySize.value = "10.00";
    finalBill = newTotal + 10;
    let bill = finalBill * 0.2;
    tipAmount.value = bill.toFixed(2);
    totalBillWithTip.value = (bill + finalBill).toFixed(2);
  } else if (guests <= 3 && service == 3) {
    partySize.value = "10.00";
    finalBill = newTotal + 10;
    let bill = finalBill * 0.3;
    tipAmount.value = bill.toFixed(2);
    totalBillWithTip.value = (bill + finalBill).toFixed(2);
  } else if (guests >= 4 && service == 1) {
    partySize.value = "20.00";
    finalBill = newTotal + 20;
    let bill = finalBill * 0.1;
    tipAmount.value = bill.toFixed(2);
    totalBillWithTip.value = (bill + finalBill).toFixed(2);
  } else if (guests >= 4 && service == 2) {
    partySize.value = "20.00";
    finalBill = newTotal + 20;
    let bill = finalBill * 0.2;
    tipAmount.value = bill.toFixed(2);
    totalBillWithTip.value = (bill + finalBill).toFixed(2);
  } else {
    partySize.value = "20.00";
    finalBill = newTotal + 20;
    let bill = finalBill * 0.3;
    tipAmount.value = bill.toFixed(2);
    totalBillWithTip.value = (bill + finalBill).toFixed(2);
  }
});
