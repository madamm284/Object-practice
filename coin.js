const character ={
    hairColor:"red",
    eyeColor:"green",
    clothesColor:"yellow",
    goldCoins:0,
    isDead:false,
    position:{
        x:0,
        y:0,
    },
    hasKey:true,
    inventory:["sword","torch","hat","shield","map"],
}
 const chest={
  isOpen:false,
  isLocked:false, 
  coins:10, 
  inventory:["sword","torch","hat","shield","map"],
  openChest : function(){

if(!this.isOpen){
    this.isOpen=true, 
    this.coins=0;
    console.log("Chest open! Collect 10 coins")
}
  },

 };
 console.log(character.eyeColor);