/*
console.log("starting to login function")
function login(username,password,Name){
    retrundata = function(){
        console.log("returndata function call")
        return 
    }
    setTimeout(retrundata,500)
    console.log("id: "+username)
    console.log("password: "+password)
    return Name
}
var response = login("shri",458,"alex")
console.log(response)
console.log("ending process")
*/

/*
console.log("start")
function cricket(bat , ball , pitch){
    returntoplayer = function(){
        console.log("searching all deatiails about cricket ")
        return 
    }
    setTimeout(returntoplayer,1000)
    console.log(pitch)
    return bat
}
var screenplay = cricket(4.5 , 2.2 , 30.5)
console.log(screenplay)
console.log("end up session ")



var s = 10
console.log("s: "+s)
function number(){
    returnnumber = function(){
        ++s
        console.log("s(2): "+s)
        return
    }
    setTimeout(returnnumber,1000)
    ++s
    console.log("s(3): "+s)
    return ++s
}
var result = number()
++s
console.log(result)
console.log("s(4): "+s)
console.log("ens s value")
*/


var s = 10
console.log("s: "+s)
function number(){
    returnnumber = function(){
        ++s
        console.log("s(2): "+s)
        return
    }
    setTimeout(returnnumber)
    ++s
    console.log("s(3): "+s)
    return ++s
}
var result = number()
++s
console.log(result)
console.log("s(4): "+s)
console.log("ens s value")