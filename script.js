var brands = []; 
var abilites = ["BombResistance", "ColdBlooded", "Comeback", "Doubler", "DropRoller", "Haunt", "InkRecovery", "InkResistance", "InkSaver", "LastDitchEffort", "NinjaSquid", 
				"ObjectShredder", "OpeningGambit", "QuickJump", "QuickRespawn", "RespawnPunisher", "RunSpeedUp", "SpecialChargeUp", "SpecialPowerUp", "SpecialSaver", "StealthJump", "SubPowerUp", "SwimSpeedUp", 
				"Tenacity", "ThermalInk"]; 

var counter = 50; 

$(document).ready(main);

function main(){

	$("#randomize-btn").click(function(){
		counter = 50; 
		randomizeIcon()

	}); 
}

function randomizeIcon(){
	var i; 

	var num1 = Math.floor(Math.random() * 25); 
	var num2 = Math.floor(Math.random() * 25); 
	var num3 = Math.floor(Math.random() * 25); 


	if(counter >= 0){

	setTimeout(function(){
			getIcon(num1, 1); 
			getIcon(num2, 2); 
			getIcon(num3, 3);
			counter--;  
			randomizeIcon()}
	, 50);

}

	
}

function getIcon(num, iconNum){

	var icon = abilites[num]; 
	var iconPath = "images/icons/" + icon + ".png"; 
	console.log(iconPath);

	if(iconNum == 1){
		$('#icon1').attr('src', iconPath); 

	}
	else if(iconNum == 2){
		$('#icon2').attr('src', iconPath); 

	}
	else if(iconNum == 3){
		$('#icon3').attr('src', iconPath); 

	}
	else{
		console.log("image not changed");
	}
}

