/*var myMap = new Map()
myMap.set(1,"one")
myMap.set(2,"two")
myMap.set(3,"three")
myMap.set(4,"four")
//console.log(myMap)
*/

/*
var arr1  = [5,6,4,2,8]
for(let i = 0 ; i<arr1.length ; i++){
    var sqr = arr1[i]*arr1[i]
    console.log(sqr)
}
*/


function square(number) {
    return number*number
}
var arrnum = [4,5,2,3,6,9,7,8]
var result = arrnum.map(square);
console.log(result)



function cube (num){
    return num*num*num
}
var arrnum = [4,2,6,9,8]
var result = arrnum.map(cube);
console.log(result) 


function  add (count) {
    return count + 100
    
}
var salary = [4500,5500,6021,7580,4569]
var output = salary.map(add)
console.log(output)


function char(character) {
    var arr1 =   ["sai" ,"ram" , "nikhil" , "abhey"]
    return arr1
}
function num(number) {
    var arr2 =  [90 , 80 , 70 , 60]
    return arr2
    }

var arrchar = ["sam","adel","noha","jofra"]
var arrnum = [98,75,56,78] 
//console.log(arrchar)
//console.log(arrnum)
var resultchar = arrchar.map(char)
var resultnum = arrnum.map(num)
console.log(resultchar)
console.log(resultnum)


function char(character) {
    return  "sai" ,"ram" , "nikhil" , "abhey"
    }
function num(number) {
    return  90 , 80 , 70 , 60
    }

var arrchar = ["sam","adel","noha","jofra"]
var arrnum = [98,75,56,78] 
//console.log(arrchar)
//console.log(arrnum)
var resultchar = arrchar.map(char)
var resultnum = arrnum.map(num)
console.log(resultchar)
console.log(resultnum)
*

function char(character) {
    var arr1 =   ["sai" ,"ram" , "nikhil" , "abhey"]
    return arr1
}

var arrchar = ["sam","adel","noha","jofra"]
var arrnum = [98,75,56,78] 
//console.log(arrchar)
//console.log(arrnum)
var resultchar = arrchar.map(char)
console.log(resultchar)
console.log(arrnum)