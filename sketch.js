//Create variables here
var dog, happdog, foodS, database, foodstock , dogimg, happdogimg ;

function preload()
{
	//load images here
  happydogimg=loadImage("images/happydog.png")
  dogimg=loadImage("images/dog.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(350,250,0,0)
  dog.addImage(dogimg)
  dog.scale = 0.1
  
  foodstock = database.ref("food")
  foodstock.on("value",readstock);
}


function draw() {  
  background(46, 139, 87)

if(keyWentDown(UP_ARROW)){

writeStocks(foodS)
dog.addImage(happydogimg)
dog.scale = 0.1
}

  drawSprites();
  //add styles here
  textSize(20)
  fill("white")
  text("Note: Press Up Arrow to feed the dog",100,20)
}

function readstock(data){

foodS = data.val();

}

function writeStocks(x){

database.ref("/").update({
  food:x
})
}
