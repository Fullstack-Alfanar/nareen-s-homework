///***** QUESTION 1 *****/////
// function FULL_NAME(x,y)
// { return (x+" "+y);  }

// var first = prompt("please enter your first name");
// var last = prompt("please enter your last name");

// console.log(FULL_NAME(last,first));


// var first1 = prompt("please enter your first name");
// var last1 = prompt("please enter your last name");

// console.log(FULL_NAME(first1,last1));

/////////////////////////////////////////////////////////////

/////***** QUESTION 2 *****/////

// function avg(a)
// {
// var sum=0;
// for(i=0;i<a.length;i++)
// { 
//     sum=sum+a[i];
// }
// return(sum/a.length)
// }

// ///קריאה שנייה 
// var x=[1,2,3]
// console.log(avg(x));

// ///קריאה שלישית 
// var y=[];
// for(i=0; i<3 ;i++)
// {
//     y[i]=+prompt("please enter a number");
//     console.log(y[i]);
// }
// console.log(avg(y));
///////////////////////////////////////////////////////////

/////***** QUESTION 3 *****/////

// function len(n) {
//     let x = "";
//     for (let i = 1; i <= n; i++) {
//         x = x + "*";
//     }
//     return (x);
// }
// function size(n)
//  {
//     var y="";
//     for ( j = 1; j <= n; j++)
//      {
//         y+=len(n)+"\n";
//     }
//     return(y);
// }

// var n=prompt("please enter a number");
// console.log(size(n));

///////////////////////////////////////////////////////////

///***** QUESTION 4 *****/////
// function tangular(n)
// {
// var y="";

//     for (i = 1; i <= n; i++)
//     {
//         y+=String(i);
//          console.log(y);
//     }
//     return (y);
// }
// var n = +prompt("please enter a number");
// console.log(tangular(n));

///////////////////////////////////////////////////////////

/////***** QUESTION 5 *****/////
// var n;
// function shora(n)
// {
//     var x="";
//     for(var i=1;i<=n;i++)
//     {
//        x=x+"*";
//     }
// return(x)
// }



// function tranguar(n)
// {
//     let y="";
//     for(var i=n;0<i;i--)
//     {
//     y+=shora(i);
//     y += "\n"
//     }
//    return(y);
// }
// var n=+prompt("please enter a number");
// console.log(tranguar(n));

///////////////////////////////////////////////////////////

/////***** QUESTION 6 *****/////

// var n;
// function shora(n)
// {
//     var x="";
// for(var i=1;i<=n;i++)
//     {
//        x=x+String(i)
//     }
    
// for(var i=1;i<=n;i++)
//     {
//        x=x+"*"
//     }

// return(x);
// }




// function tranguar(n)
// {
//     let y="";
//     for(var i=n;0<i;i--)
//     {
//     y+=shora(i);
//     y += "\n"
//     }
//    return(y);
// }
// var n=+prompt("please enter a number");
// console.log(tranguar(n));


///////////////////////////////////////////////////////////

/////***** QUESTION 7 *****/////
// var n;
// function shora(n)
// {
//     var x="";
//     for(var i=1;i<=n;i++)
//     {
//        x=x+"*";
//     }
// return(x)
// }
// function shora(n)
// {
//     var x="";
//     for(var i=n;0<i;i++)
//     {
//        x=x+"*";
//     }
// return(x)
// }


// function tranguar(n)
// {
//     let y="";
//     for(var i=n;0<i;i--)
//     {
//     y+=shora(i);
//     y += "\n"
//     }
//    return(y);
// }
// var n=+prompt("please enter a number");
// console.log(tranguar(n));

/////
var n;
var x="",y="";
function shora(n)
{
    for(var i=1;i<=n;i++)
    {
       x=x+"*";
    }
return(x)
}
function upside_down(n)
{
    for(var j=1;j<=n;j++)
    {
       y+="*";
    }
return(y)
}



function tranguar(n)
{
    let m="";
    for(var i=n;0<i;i--)
    {
    m+=shora(i);
    m += "\n"
    }
   return(m);
}
var n=+prompt("please enter a number");
console.log(tranguar(n));