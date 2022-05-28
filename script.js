function showMessage() {
    document.getElementById("result").style.display = "block";
}

function compute() {
  p = document.getElementById("principal").value;

  var principal = document.getElementById("principal").value;
  if(parseInt(principal) < 1) {
      alert("Enter a valid positive number");
      document.getElementById("principal").focus();
      return();
  }

  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;

  var today = newDate();
  var year = newDate().getFullYear() + parseInt(years);
};

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = rateval;
}
