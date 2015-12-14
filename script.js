function magic(){
document.getElementById("Para").style.visibility="hidden";
}


function OnandOn(){
  setTimeout(function(){document.getElementById('rightbody').innerHTML+="Pepproni ";},500);
  setTimeout(function(){document.getElementById('rightbody').innerHTML+="Pizza ";},100);
  setTimeout(function(){OnandOn()},1000);
}

function Time(){
	var date=new Date();
	var hours=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
	minutes=addZero(minutes);
	seconds=addZero(seconds);
	document.getElementById('clock').innerHTML=hours+":"+minutes+":"+seconds;
	clock=setTimeout(function(){Time()},500);}
function addZero(digit){if (digit<=9) {digit="0" + digit;}	return digit;}

function changeText() {
	document.getElementById("paratrooper").innerHTML=Date();
}
var todayDate = new Date();
var month = todayDate.getMonth();
var year = todayDate.getFullYear();
var date = todayDate.getDate();
