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
 }*/
 function changeBackground() {
     if (document.body.style.backgroundColor == "white") {
         document.body.style.backgroundColor = "purple"
     } else {
        document.body.style.backgroundColor = "white"
     }
 }

 var fotballplayer = {
     name:"David Jensen",
     age:22,
     shirtNumber: 14,
     position: "Mid-fielder",
     gender: "male"
 };
 var newFotballPlayer =fotballplayer;
 newFotballPlayer.name = "Albert Eistein";
 consule.log(newFotballPlayer);
 consule.log(fotballPlayer);
