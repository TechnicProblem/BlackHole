// Black hole, index.js
// All code owned by TechnicProblem, © TechnicProblem 2020, All Rights Reserved
// Contact me for usage of code, technicproblem@outlook.com
// 2020-12-14
// Code reworked 2023-12-08

//LANGUAGE
var langTextRed = "Red";
var langTextBlue = "Blue";
var langTextHexagonTaken = "Already taken / Invalid input";
var lang = "en";


var turn = 0;
var nextPlayer = "blue";
var blueTurn = 0;
var redTurn = 0;

var winnerDisplay = document.getElementById("winnerdisplay");
var redResultsDisplay = document.getElementById("redresults");
var blueResultsDisplay = document.getElementById("blueresults");

var hex1 = document.getElementById("hex1");
var hex2 = document.getElementById("hex2");
var hex3 = document.getElementById("hex3");
var hex4 = document.getElementById("hex4");
var hex5 = document.getElementById("hex5");
var hex6 = document.getElementById("hex6");
var hex7 = document.getElementById("hex7");
var hex8 = document.getElementById("hex8");
var hex9 = document.getElementById("hex9");
var hex10 = document.getElementById("hex10");
var hex11 = document.getElementById("hex11");
var hex12 = document.getElementById("hex12");
var hex13 = document.getElementById("hex13");
var hex14 = document.getElementById("hex14");
var hex15 = document.getElementById("hex15");
var hex16 = document.getElementById("hex16");
var hex17 = document.getElementById("hex17");
var hex18 = document.getElementById("hex18");
var hex19 = document.getElementById("hex19");
var hex20 = document.getElementById("hex20");
var hex21 = document.getElementById("hex21");
var allHexagons = [hex1, hex2, hex3, hex4, hex5, hex6, hex7, hex8, hex9, hex10,
  hex11, hex12, hex13, hex14, hex15, hex16, hex17, hex18, hex19, hex20, hex21]

function Hexagon(id, used, owner, number) {
  this.id = id;
  this.used = used;
  this.owner = owner;
  this.number = number;
}
var h1 = new Hexagon(1, false, null, null);
var h2 = new Hexagon(2, false, null, null);
var h3 = new Hexagon(3, false, null, null);
var h4 = new Hexagon(4, false, null, null);
var h5 = new Hexagon(5, false, null, null);
var h6 = new Hexagon(6, false, null, null);
var h7 = new Hexagon(7, false, null, null);
var h8 = new Hexagon(8, false, null, null);
var h9 = new Hexagon(9, false, null, null);
var h10 = new Hexagon(10, false, null, null);
var h11 = new Hexagon(11, false, null, null);
var h12 = new Hexagon(12, false, null, null);
var h13 = new Hexagon(13, false, null, null);
var h14 = new Hexagon(14, false, null, null);
var h15 = new Hexagon(15, false, null, null);
var h16 = new Hexagon(16, false, null, null);
var h17 = new Hexagon(17, false, null, null);
var h18 = new Hexagon(18, false, null, null);
var h19 = new Hexagon(19, false, null, null);
var h20 = new Hexagon(20, false, null, null);
var h21 = new Hexagon(21, false, null, null);

var hexObjects = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20, h21];

var endhex;
var endhex2;

function selectEnd() { //Select end hexagon
endhex = document.querySelector("div:not(.red):not(.blue):not(.hide):not(.gui)");
endhex.classList.add("end");
endhex2 = endhex.id;
endhex.onclick = null;
endhex.classList.remove("redhover", "bluehover")
}

function is_touch_device1() { //Remove hover functionality on touch devices
  return 'ontouchstart' in window;
}
var touchdevice = (is_touch_device1());

function setNextPlayer() {
  if (nextPlayer == "red") {
    nextPlayer = "blue";


    allHexagons.forEach((hex, i) => { //Add hover CSS classes (blue)
      if (touchdevice == false) {
        if (!hex.classList.contains("red")) {
      hex.classList.add("bluehover");
      hex.classList.remove("redhover");
    }
      }
    });


  } else {
    nextPlayer = "red";

    allHexagons.forEach((hex, i) => { //Add hover CSS classes (red)
      if (touchdevice == false) {
        if (!hex.classList.contains("blue")) {
      hex.classList.add("redhover");
      hex.classList.remove("bluehover");
        }
      }
    });
  }

  if (nextPlayer == "red") {
    turn++;
  } else {
  }

  if (turn == 11) {
    nextPlayer.innerHTML = "-";



    selectEnd();
    removeNearest();

  }
}

// IF TURN == 20 check !colored

function startGame() {
  buttonStart.disabled = true;
  setNextPlayer();
}

var choice;

function newPlace(pHex) {
  choice = pHex;
  place();
}


for (let i = 0; i < 21; i++) { //Add onclick function to hexagons
  allHexagons[i].onclick = function() { newPlace(i+1); }
}

function place() { //Change hexagon ownership to current player on click
  if (hexObjects[choice-1].owner == null && choice >= 1 && choice <= 21) {
    allHexagons[choice-1].classList.add(nextPlayer);
    hexObjects[choice-1].owner = nextPlayer;
    hexObjects[choice-1].number = turn;
    allHexagons[choice-1].innerHTML = hexObjects[choice-1].number;
    setNextPlayer();
} else {
  errorDisplay(nextPlayer, langTextHexagonTaken)
}
}

function errorDisplay(player, message) {
    if (player == "red") {
      //errorRed.innerHTML = message;
    } else {
      //errorBlue.innerHTML = message;
    }
}

//2d array
const adHex1 = [1, 2, 7];
const adHex2 = [1, 2, 3, 7, 8];
const adHex3 = [2, 3, 4, 8, 9];
const adHex4 = [3, 4, 5, 9, 10];
const adHex5 = [4, 5, 6, 10, 11];
const adHex6 = [5, 6, 11];
const adHex7 = [1, 2, 7, 8, 12];
const adHex8 = [2, 3, 7, 8, 9, 12, 13];
const adHex9 = [3, 4, 8, 9, 10, 13, 14];
const adHex10 = [4, 5, 9, 10, 11, 14, 15];
const adHex11 = [5, 6, 10, 11, 15];
const adHex12 = [7, 8, 12, 13, 16];
const adHex13 = [8, 9, 12, 13, 14, 16, 17];
const adHex14 = [9, 10, 13, 14, 15, 17, 18];
const adHex15 = [10, 11, 14, 15, 18];
const adHex16 = [12, 13, 16, 17, 19];
const adHex17 = [13, 14, 16, 17, 18, 19, 20];
const adHex18 = [14, 15, 17, 18, 20];
const adHex19 = [16, 17, 19, 20, 21];
const adHex20 = [17, 18, 19, 20, 21];
const adHex21 = [19, 20, 21];
const allAdHex =  [adHex1, adHex2, adHex3, adHex4, adHex5, adHex6, adHex7, adHex8, adHex9, adHex10, adHex11, adHex12, adHex13, adHex14, adHex15, adHex16, adHex17, adHex18, adHex19, adHex20, adHex21];
var endHexInt;

var border = [];
var borderdiv = [];

async function removeNearest() { //Remove hexagons adjacent to end hexagon

  await new Promise(r => setTimeout(r, 2000));
  endHexInt = allHexagons.indexOf(endhex);
  let endHexArray = allAdHex[endHexInt];
  for (let i = 0; i < endHexArray.length; i++) {
    border.push(hexObjects[endHexArray[i]-1]);
    borderdiv.push(allHexagons[endHexArray[i]-1]);
  }

  border.forEach((item, i) => {
    item.number = 0;
    item.owner = null;
  });
  borderdiv.forEach((itemdiv, i) => {
    itemdiv.innerHTML = 0;
    itemdiv.classList.add("semiend");
    itemdiv.classList.remove("redhover");
    itemdiv.classList.remove("bluehover");
  });

calculateSum();
}


var redsum = 0;
var bluesum = 0;
var winner;
function calculateSum() {
  endhex.classList.remove("semiend");
  endhex.classList.add("end");
  allHexagons.forEach((divitem, i) => {
    if (divitem.classList.contains("red")) {
    var divitem2 = parseInt(divitem.innerHTML, 10);
    redsum = redsum + divitem2;
  } else {
    var divitem2 = parseInt(divitem.innerHTML, 10);
    bluesum = bluesum + divitem2;
  }
  });

  if (redsum > bluesum) {
    winner = "Red";
    winnerDisplay.classList.add("redtext");
  } else if (bluesum > redsum) {
    winner = "Blue";
    winnerDisplay.classList.add("bluetext");
  } else {
    winner = "Tie!"
  }
  //winnerDisplay.innerHTML = winner;
  //winDisplayP.classList.remove("hide");
  errorDisplay("red", redsum);
  errorDisplay("blue", bluesum);
  console.log(winner);
  redResultsDisplay.innerHTML = redsum;
  blueResultsDisplay.innerHTML = bluesum;
  winnerDisplay.innerHTML = winner;
}

setNextPlayer();
