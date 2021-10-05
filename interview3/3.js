var btn1=document.querySelector("#btn_1");
var btn2=document.querySelector("#btn_2");
btn1.addEventListener("click",incby2);

btn2.addEventListener("click",incby4);
 var likecounter=0;
function incby2()
{
   
     likecounter+=2;
    btn1.innerHTML=likecounter;



}
function incby4()
{
    likecounter+=4;
    btn2.innerHTML=likecounter;
}