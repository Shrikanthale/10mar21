//var result = require("./mylib")
//result.iseven(52)
//result.printarr(1198)

//var calculator = require("./mylib")
//calculator.addition(45,54)
//calculator.multiplecation(5,5)
//calculator.subtraction(200,50)

//var student = require("./mylib")

//const s1 = new student("ash" , 458965 , 001230)
//console.log(s1.deatials())

const student = require("./objfun")

var s1 = new student("tom","curran",4587)
console.log(s1.getfullname())
s1.geteditname("sam billings 1254")
console.log(s1.getfullname())