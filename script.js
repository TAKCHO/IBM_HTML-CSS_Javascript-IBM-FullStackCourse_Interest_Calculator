function showMessage() {
  document.getElementById("result").style.display = "block";
}

function compute() {
  var principal = document.getElementById("principal").value;

  if (principal.value < 1) {
    alert("Enter a valid positive number");
    principal.focus();
    return;
  }

  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  var interest = (principal.value * years.value * rate.value) / 100;

  var today = new Date();
  var yearN = new Date().getFullYear() + parseInt(years.value);

  document.getElementById("deposit").innerHTML = "" + principal;
  document.getElementById("interest").innerHTML = "" + rate;
  document.getElementById("amount").innerHTML = "" + interest;
  document.getElementById("yearReceive").innerHTML = "" + yearN;
  showMessage();

  return false;
}

function showRange() {
  var rate = document.getElementById("rate").value;
  document.getElementById("ratevalue").innerHTML = rate;
}

console.log(rate);
