var  display = document.getElementById("imgs")
var total = document.getElementById("Allimgs")
var Allimgs = total.getElementsByTagName("IMG")
var indexNumber = 0;

function initSlider(){
display.src = Allimgs[indexNumber].src
}
initSlider()

function previous(){

    if(indexNumber==0){
        indexNumber = Allimgs.length-1;
    }
else{
    indexNumber--;
}
initSlider()
}


function next(){
    if(indexNumber==Allimgs.length-1){
        indexNumber=0;
    }
else{
    indexNumber++;
}
initSlider()
}








