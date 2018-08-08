var Level = "";
var State = "";

$.ajaxSetup({
cache: false,
headers: {'Cache-Control': 'no-cache'}
});

function init(){
	
refreshLocationTimer = setTimeout(init, 10*1000);
jQuery.get('file:///private/var/mobile/Library/BatteryStats.txt', function(appdata) {

var myvar = appdata;
var substr = appdata.split('\n');
var Level=substr[0].split(':')[1];
var State=substr[1].split(':')[1];

if (lang == "ca"){
document.getElementById("LevelDisplay").innerHTML = "bateria al " + Level + "%";}
if (lang == "en"){
document.getElementById("LevelDisplay").innerHTML = "battery at " + Level + "%";}
if (lang == "fr"){
document.getElementById("LevelDisplay").innerHTML = "batterie a " + Level + "%";}
if (lang == "de"){
document.getElementById("LevelDisplay").innerHTML = "batterie" + Level + "%";}

document.getElementById("StateDisplay").innerHTML = State;
});
}