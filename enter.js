var nodelist = document.getElementsByTagName("LI");
var activeElements = document.getElementsByClassName('todo')




var i;
for(i=0;i<nodelist.length;i++){
    var span = document.createElement("span");
    span.appendChild(txt);
    nodelist[i].appendChild(span);
}


function newElement(){
    var li = document.createElement("LI");
    var activeElements = document.getElementsByClassName('todo');
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);

     if(inputValue === ""){
         alert("You must write something");
     }
     else{
         document.getElementById("myUL").appendChild(li);
     }

     document.getElementById("myInput").value = "";

     var span = document.createElement("SPAN");
     span.appendChild(txt);
     li.appendChild(span);

     for(i=0; i<close.length; i++){
         close[i].onclick = function(){
             console.log("heloo world")
             var div = this.parentElement;
             div.style.display = "none";
         }
     }
}