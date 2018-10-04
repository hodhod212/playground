consule.log("It works")
/*function changeBackground(color) {
    document.body.style.background = color;
 } */
 /*function changeBackground() {
     var backgroundColor =  document.body.style.backgroundColor;
   if( backgroundColor == "white") {
       backgroundColor = "purple";
   } else {
       backgroundColor = "white";
   }
 }
 function changeBackground() {
     if (document.body.style.backgroundColor == "white") {
         document.body.style.backgroundColor = "purple";
     } else {
        document.body.style.backgroundColor = "white";
     }
 }

 function changeBackground() {
     if (randomValue < 0.3) {
        document.body.style.backgroundColor = "blue" 
     } else {
         document.body.style.backgroundColor = "beigie";
     } 
 } */
 
  
 /*function randomizeBackgroundPro() {
     var red = Math.round(Math.random()*255);
     var Red = getHex(red);
     var green = Math.round(Math.random()*255);
     var Green = getHex(green);
     var blue = Math.round(Math.random()*255);
     var Blue = getHex(blue);
     var rgbValue = "#" + Red +  + Green + + Blue ;
     
     document.body.style.background = rgbValue
     setTimeout("randomizeBackgroundPro()", 3000);  
 }
 function getHex(dec)
 { 
 var hexArray = new Array( "0", "1", "2", "3","4", "5", "6", "7","8", "9", "A", "B","C", "D", "E", "F" );
  
 var code1 = Math.floor(dec / 16);
  
 var code2 = dec - code1 * 16;
  
 var decToHex = hexArray[code2];
  
 return (decToHex);
 } */

 function randomizeBackgroundWithHex() {
     var red1 = convertToHex(Math.round(Math.random()*15))
     var red2 = convertToHex(Math.round(Math.random()*15));
     var green1 = convertToHex(Math.round(Math.random()*15));
     var green2 = convertToHex(Math.round(Math.random()*15));
     var blue1 = convertToHex(Math.round(Math.random()*15));
     var blue2 = convertToHex(Math.round(Math.random()*15));
     var rgbValue = "#"+red1+red2+green1+green2+blue1+blue2;
     document.body.style.background = rgbValue
     setTimeout("randomizeBackgroundWithHex()", 3000); 
 }
 function convertToHex(value) {
     if (value == 10){
         return "A";
     }
     if (value == 11){
        return "B";
    }
    if (value == 12){
        return "C";
    }
    if (value == 13){
        return "D";
    }
    if (value == 14){
        return "E";
    }
    if (value == 15){
        return "F";
    }  
    return value;
}
var myLibrary = function() {


/**
 * Calculate area of circle
  *@param width {number}
  *@param height {number}
  *@returns the area of the rectangle
  */
 function calculaterectangleArea(radius) {
    Math(width*height);

}
function calculateCircleArea(radius) {
    Math(Math.PI*radius*radius);

}
return {
    calculaterectangleArea,
    calculateCircleArea
};
};

 /*var fotballplayer = {
     name:"David Jensen",
     age:22,
     shirtNumber: 14,
     position: "Mid-fielder",
     gender: "male"
 };
 var newFotballPlayer =fotballplayer;
 newFotballPlayer.name = "Albert Eistein";
 consule.log(newFotballPlayer);
 consule.log(fotballPlayer);*/

function convertToBinary(){
var sBinString = '1101011';
var nMyNumber = parseInt(sBinString, 2);
alert(nMyNumber);
}
function convertToDecimal(){
var nMyNumber = 11;
var sBinString = nMyNumber.toString(2);
alert(sBinString);
}