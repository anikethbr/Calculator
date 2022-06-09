var str="";
var res;
function num(id){
    str+=id;
    document.getElementById("input").value=str;
    console.log(str);
}
function calc(){
    res=eval(str);
    document.getElementById("input").value=res;
    str=res;
}
function clr(){
    document.getElementById("input").value="";
    str="";
}
document.addEventListener("keypress", function(event) {
  if (event.key === "Enter"){
    str=document.getElementById("input").value;
    calc();
  }
});