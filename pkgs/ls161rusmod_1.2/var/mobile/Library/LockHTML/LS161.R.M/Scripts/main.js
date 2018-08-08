if (Lang == "ua"){
	var days = ["Недiля","Понедiлок","Вiвторок","Середа","Четвер","Пятниця","Субота"];
	var months=['Сiчень','Лютий','Березень','Квiтень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
}
if (Lang == "en"){
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
}
if (Lang == "ru"){
	var days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
	var months=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
}
if (Lang == "de"){
	var days = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
	var months=["Januar","Februar","Marz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
}

function updateClock() { 
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
var currentYear = currentTime.getFullYear();
timeOfDay = ( currentHours < 12 ) ? "a" : "p";

if (Clock == "24h"){
	timeOfDay = "";
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
}
if (Clock == "12h"){
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
}

document.getElementById("hour").innerHTML = currentHours;
document.getElementById("minute").innerHTML = currentMinutes;
document.getElementById("ampm").innerHTML = timeOfDay;

document.getElementById("day").innerHTML = days[currentTime.getDay()];
document.getElementById("date").innerHTML = currentDate;
document.getElementById("month").innerHTML = months[currentTime.getMonth()];
}

function init(){
updateClock();
setInterval("updateClock();", 1000);
}