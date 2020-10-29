// // your age in days ass

// function ageInDays() {
//   const birthYear = prompt("How many days do you shit");
//   const ageInDayss = (2020 - birthYear) * 365;
//   const h1 = document.createElement("h1");
//   const textAnswer = document.createTextNode(
//     "You suck " + ageInDayss + " times. I love you. "
//   );
//   h1.setAttribute("id", "ageInDays");
//   h1.appendChild(textAnswer);
//   document.getElementById("flexresult").appendChild(h1);
// }

// function reset() {
//   document.getElementById("ageInDays").remove();
// }

function howMany() {
  let satanPrompt = document.createElement("p");
  satanPrompt.setAttribute("id", "satan-prompt");
  let satanQ = document.createTextNode("how many satans would you like");
    satanPrompt.appendChild(satanQ);

  let satanInput = document.createElement("input");
  satanInput.setAttribute("type", "text");
  satanInput.setAttribute("id", "satan-input");

  let subBut = document.createElement('button');
  let butText = document.createTextNode("submit");
  subBut.appendChild(butText);

  subBut.setAttribute("id", "moreSatan2");
  subBut.setAttribute("onclick", "getSatans()");

  document.getElementById("satan").appendChild(satanPrompt);
  document.getElementById("satan").appendChild(satanInput);
  document.getElementById("satan").appendChild(subBut);
  document.getElementById("satanbut").hidden = true;
  

}

function getSatans() {
  const satanNumber = document.getElementById("satan-input").value;
  const satanSix = 666 * satanNumber;
  const h2 = document.createElement("h2");
  let satanAns = document.createTextNode("you have " + satanSix + " satans.");

  const button = document.createElement("button");
  const buttonText = document.createTextNode("satan again please");
  button.appendChild(buttonText);
  button.setAttribute("id", "moreSatan");
  button.setAttribute("onclick", 'resett()');

  h2.setAttribute("id", "satanAns");
  h2.appendChild(satanAns);
  
  
  document.getElementById("satanresult").appendChild(h2);
  document.getElementById("satanresult").appendChild(button);
  document.getElementById("satan-input").hidden = true;
  document.getElementById("satan-prompt").hidden = true;
  document.getElementById("moreSatan2").hidden = true;



}



function resett() {
  
  document.getElementById("satanAns").remove();
  document.getElementById("satan-prompt").remove();
  document.getElementById("satan-input").remove();
  document.getElementById("moreSatan").remove();
  document.getElementById("moreSatan2").remove();
  document.getElementById("satanbut").hidden = false;



  // location.reload();
 
 

}
