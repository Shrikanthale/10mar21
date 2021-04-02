/*function iseven(x){
    if(x%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

function printarr(num){
    console.log(num)
}

module.exports.iseven=iseven
module.exports.printarr=printarr


var addition = (a,b) => {
    var c = a+b
    console.log("addition : " +c)
}


var subtraction = (x,y) => {
    var z = x-y
    console.log("subtraction : " +z)
}


var multiplecation = (p,q) => {
    var r = p*q
    console.log("multiplecation : " +r)
}

module.exports.addition=addition
module.exports.subtraction=subtraction
module.exports.multiplecation=multiplecation

*/

class student {
    constructor(Name,id,password){
        this.Name=Name
        this.id=id
        this.password
    }
    deatials(){
        console.log(this.Name)
        console.log(this.id)
        console.log(this.password)
    }
}

module.exports = student