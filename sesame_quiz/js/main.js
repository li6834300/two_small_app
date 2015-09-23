
//(function(){
window.onload = function () {

	var leftObj = document.getElementById("left");
	var rightObj = document.getElementById("right");
	var timer = null;
	//console.log(leftObj)

	leftObj.addEventListener("click", changeImg.bind(null,rightObj));
	
	function changeImg(obj){

		obj.firstChild.src = "images/boom_1.jpg";
		changeImgback(obj);
		
	
	}

	function changeImgback(obj){
		if(timer){
			clearTimeout(timer);
			timer = setTimeout(function(){obj.firstChild.src = "images/bomb.jpg"; timer=null;}, 3000);
		}
		else{
			timer = setTimeout(function(){obj.firstChild.src = "images/bomb.jpg"; timer=null;}, 3000);
			var audio = new Audio('sound/bomb.mp3');
			audio.play();	
		}				
	}
//})()

	// body...
}

