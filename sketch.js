//Create variables here
var happyDog
var dog
var database
var foodS
var foodStock
function preload()
{
  dogimg = loadImage ("doglmg.png")
  happyDog = loadImage("dogImg1.png")

}

function setup() {
  createCanvas(500,500);
  database = firebase.database()
  dog = createSprite (250,300,10,10)
  dog.addImage(dogimg)
  foodStock=database.ref('Food');
  foodStock.on("value",readstock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  

}
drawSprites();
  textSize (2)
  fill ("red")
  stroke (10)
  text("food remaning "+foodS,170,200)
}


function readStock(data){
  foodS=data.val();
}
function wireStock(x){
  database.ref('/').update({
    Food:x
  })
}
