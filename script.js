function createLog(){
  console.log("you hit the button.");
  contactName();
  checkKey();
  checkEngine();
  contactPhone();
  pickupHours();
  turvoLog();
}

function turvoLog(){
  checkEngineTurvo();
  checkNameTurvo();
  checkKeyTurvo();
  contactPhoneTurvo();
  pickupHoursTurvo();
}

function allyLog(){
  console.log("you on ally");
  contactAllyName();
  checkAllyKey();
  checkAllyEngine();
  checkAccess();
  contactPhone();
}

function createChatterLog(){
  console.log("you hit the chatter button.");
  checkVIN();
  checkRATES();
}

function createCOLLog(){
  console.log("you hit the COL button.");
  checkVIN();
  checkName();
  checkReplacement();
}

function createVoiceLog(){
  console.log("you hit the voicemail log button.")
  checkName();
}

function contactName(){
  var name = document.getElementById("nameInput").value;
  document.getElementById("NAME").innerHTML = name;
  document.getElementById("NAME2").innerHTML = name;
}

function contactAllyName(){
  var name = document.getElementById("nameInput").value;
  document.getElementById("NAME").innerHTML = name;
}

function checkName(){
  var name = document.getElementById("nameInput").value;
  document.getElementById("NAME").innerHTML = name;
}

function checkNameTurvo(){
  var name = document.getElementById("nameInput").value;
  document.getElementById("tNAME").innerHTML = name;
  document.getElementById("tNAME2").innerHTML = name;
  console.log("names happen.")
}

function contactPhone(){
  var number = document.getElementById("phoneInput").value;
  document.getElementById("NUMBER").innerHTML = number;
}

function contactPhoneTurvo(){
  var number = document.getElementById("phoneInput").value;
  document.getElementById("tNUMBER").innerHTML = number;
}

function checkKey(){
  if(document.getElementById("keyCheck").checked) {
    document.getElementById("KEYS").innerHTML = "keys";
  } else {
    document.getElementById("KEYS").innerHTML = "no keys";
  }
}

function checkKeyTurvo(){
  if(document.getElementById("keyCheck").checked) {
    document.getElementById("tKEYS").innerHTML = "KEYS";
  } else {
    document.getElementById("tKEYS").innerHTML = "NO KEYS";
  }
}

function checkAllyKey(){
  if(document.getElementById("keyCheck").checked) {
    document.getElementById("KEYS").innerHTML = "KEYS";
  } else {
    document.getElementById("KEYS").innerHTML = "NO KEYS";
  }
}

function checkEngine(){
  if(document.getElementById("engineCheck").checked) {
    document.getElementById("STATE").innerHTML = "operable";
  } else {
    document.getElementById("STATE").innerHTML = "inoperable";
  }
}

function checkEngineTurvo(){
  if(document.getElementById("engineCheck").checked) {
    document.getElementById("tSTATE").innerHTML = "RUNS";
  } else {
    document.getElementById("tSTATE").innerHTML = "INOP";
  }
}

function checkAllyEngine(){
  if(document.getElementById("engineCheck").checked) {
    document.getElementById("STATE").innerHTML = "RUNS";
  } else {
    document.getElementById("STATE").innerHTML = "UNKNOWN RUNNER";
  }
}

function checkAccess(){
  if(document.getElementById("accessCheck").checked) {
    document.getElementById("ACCESS").innerHTML = ", FULL ACCESS";
  } else {
    document.getElementById("ACCESS").innerHTML = "";
  }
}

function pickupHours(){
  var days = document.getElementById("pDays").value;
  var hours = document.getElementById("pHours").value;
  document.getElementById("DAYS").innerHTML = days;
  document.getElementById("HOURS").innerHTML = hours;
}

function pickupHoursTurvo(){
  var days = document.getElementById("pDays").value;
  var hours = document.getElementById("pHours").value;
  document.getElementById("tDAYS").innerHTML = days;
  document.getElementById("tHOURS").innerHTML = hours;
}

function checkVIN(){
  var vin = document.getElementById("vinInput").value;
  document.getElementById("VIN").innerHTML = vin;
}

function checkRATES(){
  var rates = document.getElementById("ratesInput").value;
  document.getElementById("RATES").innerHTML = rates;
}

function checkReplacement(){
  if(document.getElementById("replacementCheck").checked) {
    document.getElementById("rSTATE").innerHTML = "the client picked up the new unit, but did not leave the turn in unit there.";
  } else {
    document.getElementById("rSTATE").innerHTML = "they do not have this unit at their location.";
  }
}
