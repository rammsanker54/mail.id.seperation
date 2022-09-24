//mailid seperation//
 var a = "sankeramm54@gmail";
var b= a.indexOf("@");
var c = a.slice(0,b);
var d= c.match(/[a-z]+/g);
var number= c.match(/[0-9]+/g);
console.log(b); 