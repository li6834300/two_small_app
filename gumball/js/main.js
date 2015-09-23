
function dropgumballs(nums){
	for(var i=0; i<nums; i++){
		gumball();
	}
}

function gumball(){
	var mygumball = Math.floor((Math.random() * 100) + 1);
	if(mygumball < 21){
		return dropmeagumball("Red")
	}
	else if(mygumball >= 21 && mygumball < 50){
		return dropmeagumball("Green")
	}
	else{
		return dropmeagumball("Blue")
	}
}

function dropmeagumball(color){
	var myNewgumball = "<div class='gumball "+color+"'>";
	document.getElementById("candybox").insertAdjacentHTML('beforeend', myNewgumball);
}

function removeAllgumball(){
	document.getElementById("candybox").removeChild()
}

// if you just want a function that return RED BlUE GREEN string, the following will do so:

function stringgumballs(){
	var mygumball = Math.floor((Math.random() * 100) + 1);
	if(mygumball < 21){
		return "Red"
	}
	else if(mygumball >= 21 && mygumball < 50){
		return "Green"
	}
	else{
		return "Blue"
	}
}
