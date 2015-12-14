
function changeText() {
	document.getElementById("para").innerHTML=Date();
}

var todayDate = new Date();
var month = todayDate.getMonth();
var year = todayDate.getFullYear();
var date = todayDate.getDate()
;

var firstnumber
var secondnumber

function addWords(){
    var words = document.getElementById("stuff").value;
		var words2 = document.getElementById("stuff2").value;

		if(words=="one"){firstnumber=1} else if
		(words=="two"){firstnumber=2} else if (words=="three") {firstnumber=3} else if
		(words=="four"){firstnumber=4} else if (words =="four") { firstnumber=4} else if (words=="five"){firstnumber=5}

		if(words2=="one"){secondnumber=1} else if
		(words2=="two"){secondnumber=2} else if (words2=="three") {secondnumber=3} else if
		(words2=="four"){secondnumber=4} else if (words2=="four") {secondnumber=4} else if (words2=="five"){secondnumber=5}

document.getElementById("pera").innerHTML=(firstnumber + secondnumber);}

function subtractWords(){
    var words = document.getElementById("stuff").value;
		var words2 = document.getElementById("stuff2").value;

		if(words=="one"){firstnumber=1} else if
		(words=="two"){firstnumber=2} else if (words=="three") {firstnumber=3} else if
		(words=="four"){firstnumber=4} else if (words =="four") { firstnumber=4} else if (words=="five"){firstnumber=5}

		if(words2=="one"){secondnumber=1} else if
		(words2=="two"){secondnumber=2} else if (words2=="three") {secondnumber=3} else if
		(words2=="four"){secondnumber=4} else if (words2=="four") {secondnumber=4} else if (words2=="five"){secondnumber=5}

document.getElementById("pera").innerHTML=(firstnumber - secondnumber);}

function multiplyWords(){
    var words = document.getElementById("stuff").value;
		var words2 = document.getElementById("stuff2").value;

		if(words=="one"){firstnumber=1} else if
		(words=="two"){firstnumber=2} else if (words=="three") {firstnumber=3} else if
		(words=="four"){firstnumber=4} else if (words =="four") { firstnumber=4} else if (words=="five"){firstnumber=5}

		if(words2=="one"){secondnumber=1} else if
		(words2=="two"){secondnumber=2} else if (words2=="three") {secondnumber=3} else if
		(words2=="four"){secondnumber=4} else if (words2=="four") {secondnumber=4} else if (words2=="five"){secondnumber=5}

document.getElementById("pera").innerHTML=(firstnumber * secondnumber);}

function divideWords(){
    var words = document.getElementById("stuff").value;
		var words2 = document.getElementById("stuff2").value;

		if(words=="one"){firstnumber=1} else if
		(words=="two"){firstnumber=2} else if (words=="three") {firstnumber=3} else if
		(words=="four"){firstnumber=4} else if (words =="four") { firstnumber=4} else if (words=="five"){firstnumber=5}

		if(words2=="one"){secondnumber=1} else if
		(words2=="two"){secondnumber=2} else if (words2=="three") {secondnumber=3} else if
		(words2=="four"){secondnumber=4} else if (words2=="four") {secondnumber=4} else if (words2=="five"){secondnumber=5}

document.getElementById("pera").innerHTML=(firstnumber / secondnumber);}
