var inputText=document.querySelector("#inputText");
var inc=document.querySelector("#increase");
var dec=document.querySelector("#decrease");
var output=document.querySelector("#textoutput");

var size=20;
inc.addEventListener("click",()=>{
output.innerHTML=inputText.value;
output.setAttribute('style',"font-size:"+size+"px");
size+=8;
})

dec.addEventListener("click",()=>{
output.innerHTML=inputText.value;
output.setAttribute('style',"font-size:"+size+"px");
size-=8;
})