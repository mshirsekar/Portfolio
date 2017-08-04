function quiz() {
  var points=0;
  var q1 = document.querySelector("input[name='q1']:checked").value;
  if (q1=="cat") {
    points +=0;
  }
  else {
    points +=1;
  }
var q2 = document.querySelector("input[name='q2']:checked").value;
if (q2=="siberianHusky") {
  points +=2;
}
else if (q2=="chowChow") {
  points +=4;
}
else if (q2=="cavalierKingCharles") {
  points +=6;
}
else if (q2=="bulldog") {
  points +=8;
}
var q3 = document.querySelector("input[name='q3']:checked").value;
if (q3=="siberianHusky") {
  points +=2;
}
else if (q3=="chowChow") {
  points +=4;
}
else if (q3=="cavalierKingCharles") {
  points +=6;
}
else if (q3=="bulldog") {
  points +=8;
}
var q4 = document.querySelector("input[name='q4']:checked").value;
if (q4=="siberianHusky") {
  points +=2;
}
else if (q4=="chowChow") {
  points +=4;
}
else if (q4=="cavalierKingCharles") {
  points +=6;
}
else if (q4=="bulldog") {
  points +=8;
}
if (q1="cat") {
document.getElementById("output").innerHTML="You are a cat person :(";
}
else if (points<8) {
document.getElementById("output").innerHTML="Congrats, you are a Husky!";
}
else if (points<14) {
document.getElementById("output").innerHTML="Congrats, you are a Chow Chow!";
}
else if (points<20) {
document.getElementById("output").innerHTML="Congrats, you are a Cavalier King Charles Spaniel!";
}
else {
document.getElementById("output").innerHTML="Congrats, you are an English Bulldog!";
}
}
