var output=document.querySelector("#output");

var object1={
    name:"ram",
    age:25,
    yuga:"Treta",
};
var object2={
    name:"krishna",
    age:31,
yuga:"Dwapar",
};

function age(obj1, obj2)
{
    if(obj1.age>obj2.age)
    {
output.innerHTML="the more age is of"+obj1.name;
    }
    else{
        output.innerHTML="the more age is of "+obj2.name;
    }
}
age(object1,object2);