/*function add(){
    var a = 5
    var b = 8
    var c = a+b
    return c
}
var result = add()
console.log(result)
*/
/*
function hi(message){
    console.log(message)
    return "hi"
}
var mess = hi("world")
console.log(mess)
*/
 // arrow function 
  
//  var hi = (message) => {console.log(message+" world")}
 // hi("hi")
/*
 var a = 5 
 var b = 10
 var c = a+b 
 var result = (c) => {console.log("addition of teo nums: "+c)}
 result(c)
 */
/*
 var sum = (a,b) => {
     var result = a+b
     return result
 }
 var result = sum(8,6);
 console.log("addition:"+result)
 */
var  table = (t) => {
    for(var i=1 ; i<=10 ;i++){
        var l = t*i
        console.log(l)  
    }
    return l
}
var l = table(6)
console.log(l)
