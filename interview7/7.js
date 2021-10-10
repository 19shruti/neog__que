var input1=document.querySelector("#input1");
var input2=document.querySelector("#input2");
var opt=document.querySelector("#opt");
var out=document.querySelector("#out");

// var operatorArray=["+","-","*","/"];


// function operator()
// {
//     var opts=opt.value;

//     if(operatorArray.includes(opts))
//     {
//     switch(opts)
//     {
//         case "+":
//             out.innerHTML=Number(input1.value)+Number(input2.value);
//             break;
//             case "-":
//             out.innerHTML=Number(input1.value)-Number(input2.value);
//             break;
//             case "*":
//             out.innerHTML=Number(input1.value)*Number(input2.value);
//             break;
//             case "/":
//             out.innerHTML=Number(input1.value)/Number(input2.value);
//             break;

//     }


//     }

//     else
//     out.innerHTML="ebter valid operator";
// }

// opt.addEventListener("input",operator);
function opp()
{

if(opt.value ==="+")
{
    out.innerHTML=Number(input1.value)+Number(input2.value);
}
else if(opt.value ==="-")
{
    out.innerHTML=Number(input1.value)+Number(input2.value);
}
else if(opt.value ==="*")
{
    out.innerHTML=Number(input1.value)+Number(input2.value);
}
else if(opt.value ==="/")
{
    out.innerHTML=Number(input1.value)+Number(input2.value);
}
else
{
    out.innerHTML="invalid operator";
}

}
opt.addEventListener("input",opp);