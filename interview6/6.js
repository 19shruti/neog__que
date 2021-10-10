var inputText=document.querySelector("#inputText");
var h1=document.querySelector("#h1");
var h2=document.querySelector("#h2");
var h3=document.querySelector("#h3");
var output=document.querySelector("#output");




h1.addEventListener("click",function btn1(){
 sizeh1=32;
 output.innerHTML=inputText.value ;
 output.setAttribute('style','font-size:'+sizeh1+"px");
}
)

h2.addEventListener("click", function btn2(){
    sizeh2=24;
    output.innerHTML=inputText.value;
    output.setAttribute('style','font-size:'+sizeh2+"px");

})

h3.addEventListener("click",function btn3()
{
    sizeh3=16;
    output.innerHTML=inputText.value;
    output.setAttribute('style','font-size:'+sizeh3+"px");
})