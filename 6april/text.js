var a=5;
function fun()
{
    console.log("hii");
     return function fun2()
    {
        var b=40;
        console.log("i am inside fun 2")
    }


}
fun();