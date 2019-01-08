var brands = []; 
var abilites = ["BombResistance", "InkRecovery", "InkResistance", "InkSaver", "QuickJump", "QuickRespawn", "RunSpeedUp", "SpecialChargeUp", "SpecialPowerUp", "SpecialSaver", 
				"SubPowerUp", "SwimSpeedUp", "MainPowerUp"]; 

var weightedAbilities = []; 

var counter = 50; 
var currentBrand = "Amiibo"; 

$(document).ready(main);

function main(){

	$("#randomize-btn").click(function(){
		counter = 50; 
		getWeightedAbilites(); 
		console.log	(weightedAbilities); 
		randomizeIcon()

	}); 

	$(document).on('change', "#brand", function(e){
		currentBrand = e.target.options[e.target.selectedIndex].text
		console.log(currentBrand); 
	}); 
}

function randomizeIcon(){
	var i; 

	var num1; 
	var num2; 
	var num3; 

	if(currentBrand === "Amiibo" || currentBrand === "Cuttlegear" || currentBrand === "Grizzco"){
		num1 = Math.floor(Math.random() * abilites.length); 
		num2 = Math.floor(Math.random() * abilites.length); 
		num3 = Math.floor(Math.random() * abilites.length); 
	}
	else{
		num1 = Math.floor(Math.random() * weightedAbilities.length); 
	    num2 = Math.floor(Math.random() * weightedAbilities.length); 
	    num3 = Math.floor(Math.random() * weightedAbilities.length); 
	}	

	
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

	var icon = weightedAbilities[num]; 
	var iconPath = "images/icons/" + icon + ".png"; 
	
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

function getWeightedAbilites(){

	if(currentBrand === "Amiibo" || currentBrand === "Cuttlegear" || currentBrand === "Grizzco"){
		console.log("No Wieght");
		weightedAbilities = abilites; 
		return weightedAbilities; 
	}
	else{
		switch(currentBrand){
			case "Annaki": 
				changeWeight("MainPowerUp", "SpecialSaver");
				break; 
			case "Enperry": 
				changeWeight("SubPowerUp", "InkResistance");
				break; 
			case "Firefin":
				changeWeight("InkSaver", "InkRecovery"); 
				break; 
			case "Forge": 
				changeWeight("SpecialPowerUp", "InkSaver"); 
				break; 
			case "Inkline": 
				changeWeight("BombResistance", "MainPowerUp"); 
				break; 
			case "Krak-on":
				changeWeight("SwimSpeedUp", "BombResistance"); 
				break; 
			case "Rockenburg": 
				changeWeight("RunSpeedUp", "SwimSpeedUp"); 
				break; 
			case "Skalop": 
				changeWeight("QuickRespawn", "SpecialSaver")
				break; 
			case "Splashmob": 
				changeWeight("InkSaver", "RunSpeedUp"); 
				break; 
			case "SquidForce": 
				changeWeight("InkResistance", "InkSaver"); 
				break; 
			case "Takoroka": 
				changeWeight("SpecialChargeUp", "SpecialPowerUp"); 
				break; 
			case "Tentatek": 
				changeWeight("InkRecovery", "QuickJump"); 
				break; 
			case "Toni Kensa":
				changeWeight("MainPowerUp", "SubPowerUp"); 
				break; 
			case "Zekko":
				changeWeight("SpecialSaver", "SpecialChargeUp"); 
				break; 
			case "Zink":
				changeWeight("QuickJump", "QuickRespawn"); 
			default: 
				console.log("Error"); 
				break; 
		}
	}
}

function copyAbilities(){
	var i = 0; 

	weightedAbilities = []; 
	for(i = 0; i < abilites.length; i++){
		weightedAbilities.push(abilites[i]); 
	}
}

function changeWeight(doubledAbility, halvedAbility){

	console.log("Changing wight"); 

	copyAbilities(); 
	var i; 
	for(i = 0; i < abilites.length; i++){
		if(abilites[i] == doubledAbility){
			var j = 0; 

			while(j < 10){
				weightedAbilities.push(doubledAbility); 
				j++; 
			}
		}
		else if(abilites[i] == halvedAbility){
			// do nothing
		}
		else{
			weightedAbilities.push(abilites[i]); 
		}
		console.log(abilites.length); 
	}

	console.log(weightedAbilities); 
}

