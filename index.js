var oLi = document.getElementsByTagName("li");
for(var i=0;i<oLi.length;i++){
    oLi[i].onclick = function(){
        console.log("q");
        console.log(1);
    }
}