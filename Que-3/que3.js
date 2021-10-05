var inputText=document.querySelector("#inputText");
var output=document.querySelector("#output");
var btn1=document.querySelector("#btn1");
var btn2=document.querySelector("#btn2");
var btn3=document.querySelector("#btn3");
btn1.addEventListener("click",()=>{
    var size1=32;
    output.innerHTML=inputText.value ;
    output.setAttribute('style',"fontsize:"+size1+"px");
 output.style.color='red';
})
