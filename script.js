function showMessage() {
  document.getElementById("result").style.display = "block";
}

function compute() {
  var principal = document.getElementById("principal").value;

  if (parseInt(principal) < 1) {
    alert("Enter a valid positive number");
    document.getElementById("principal").focus();
    return;
  }

  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  var interest = (principal * years * rate) / 100;

  var today = new Date();
  var yearN = parseInt(today.getFullYear()) + parseInt(years);

  document.getElementById("deposit").innerHTML = "" + principal;
  document.getElementById("interest").innerHTML = "" + rate;
  document.getElementById("amount").innerHTML = "" + interest;
  document.getElementById("year").innerHTML = "" + yearN;
  showMessage();

  return false;
}

function updateRate() {
  var rate = document.getElementById("rate").value;
  document.getElementById("ratevalue").innerHTML = rate;
}

console.log(rateval);
