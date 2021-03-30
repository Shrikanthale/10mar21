/*let a = 10
a= ++a , a
console.log(a)
*/

/*
var a = 10
a = ++a , ++a , a
console.log(a)
*/

function value(a){
    return a,a++,++a,a
}
var result=value(5)
console.log(result)