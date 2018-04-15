function createLog(){
  console.log("you hit the button.");
  contactName();
  checkKey();
  checkEngine();
  contactPhone();
  pickupHours();
}

function contactName(){
  var name = document.getElementById("nameInput").value;
  document.getElementById("NAME").innerHTML = name;
  document.getElementById("NAME2").innerHTML = name;
}

function contactPhone(){
  var number = document.getElementById("phoneInput").value;
  document.getElementById("NUMBER").innerHTML = number;
}

function checkKey(){
  if(document.getElementById("keyCheck").checked) {
    document.getElementById("KEYS").innerHTML = "keys";
  } else {
    document.getElementById("KEYS").innerHTML = "no keys";
  }
}

function checkEngine(){
  if(document.getElementById("engineCheck").checked) {
    document.getElementById("STATE").innerHTML = "operable";
  } else {
    document.getElementById("STATE").innerHTML = "inoperable";
  }
}

function pickupHours(){
  var days = document.getElementById("pDays").value;
  var hours = document.getElementById("pHours").value;
  document.getElementById("DAYS").innerHTML = days;
  document.getElementById("HOURS").innerHTML = hours;
}
