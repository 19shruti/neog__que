var output=document.querySelector("#output");
var object1={
    name: "Ram",
    power:2500,
    yuga:"Treta",
};
var object2={
    name: "Krishna",
    power:2325,
    yuga:"Dwapar",
};

function power(obj1,obj2)
{
    var power1=((obj1.name).length)*25;
    console.log(power1);
    var power2=((obj2.name).length)*25;
    console.log(power2);
    if(power1>power2)
    {
        output.innerHTML="the power is more of "+obj1.name;
    }
    else{
        output.innerHTML="the power is more of "+obj2.name;
    }
};
power(object1,object2);