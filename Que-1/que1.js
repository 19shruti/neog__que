

var input_A=document.querySelector("#inputa");
var input_B=document.querySelector("#inputb");
var btn=document.querySelectorAll(".btn");
var output=document.querySelector("#output");



if(btn){
    btn[0].addEventListener("click",function add(){
        output.innerHTML=Number(input_A.value)+Number(input_B.value);
    })
    btn[1].addEventListener("click",function sub(){
        output.innerHTML=Number(input_A.value)-Number(input_B.value);
    })
    btn[2].addEventListener("click",function mul(){
        output.innerHTML=Number(input_A.value)*Number(input_B.value);
    })
    btn[3].addEventListener("click",function div(){
        output.innerHTML=Number(input_A.value)/Number(input_B.value);
    })
}
