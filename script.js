var brands = []; 
var abilites = ["BombResistance", "ColdBlooded", "Comeback", "Doubler", "DropRoller", "Haunt", "InkRecovery", "InkResistance", "InkSaver", "LastDitchEffort", "NinjaSquid", 
				"ObjectShredder", "OpeningGambit", "QuickJump", "QuickRespawn", "RespawnPunisher", "RunSpeedUp", "SpecialChargeUp", "SpecialPowerUp", "SpecialSaver", "StealthJump", "SubPowerUp", "SwimSpeedUp", 
				"Tenacity", "ThermalInk"]; 

$("#randomize-btn").click(RandomizeIcon()); 

$(document).ready(function(){
	console.log("ready!"); 
});

function getIcon(num, iconNum){

	var icon = abilites[num]; 
	var iconPath = "/images/Icons/" + icon + ".png"; 
	console.log(iconPath);

	if(iconNum === 1){
		$('#icon1').attr('src', iconPath); 
	}
	else if(iconNum === 2){
		$('#icon2').attr('src', iconPath); 
	}
	else if(iconNum === 3){
		$('#icon3').attr('src', iconPath); 
	}
}

function RandomizeIcon(){
	
	var num1 = Math.floor(Math.random() * 25); 
	var num2 = Math.floor(Math.random() * 25); 
	var num3 = Math.floor(Math.random() * 25); 

	getIcon(num1, 1); 
	getIcon(num2, 2); 
	getIcon(num3, 3); 
}
