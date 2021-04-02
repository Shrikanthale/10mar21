/*var student = {
    Name:"shri",
    ID:86,
    add:"@ airport",
    gender:"M",
    
    Deatils : function(){
        console.log(this.ID)
        console.log(this.Name)
        console.log(this.add)
        console.log(this.gender)
    }
}
student.Deatils()
*/
/*
var people = {
    Name : "sham",
    course:"cs",
    codeno:1452,
    color:"black",

    Deatils : function(){
        console.log(this.Name)
        console.log(this.codeno)
        console.log(this.course)
        console.log(this.color)
    }
}
people.Deatils()
*/
/*
var people = {
    Name : "sham",
    course:"cs",
    codeno:1452,
    color:"black",

    Deatils : function(){
        console.log(this.Name)
        console.log(this.codeno)
        console.log(this.course)
        console.log(this.color)
    },

    getName : function(LastName){
        return this.Name+" "+LastName
    }
}
console.log(people.getName("sharma"))

var people = {
    Name : "sham",
    course:"cs",
    codeno:1452,
    color:"black",
}
 people.LastName="sharma"
 console.log(people.Name+" "+people.LastName)
 */



 class student {
     constructor(Name,lastname,id){
         this.Name=Name
         this.lastname=lastname
         this.id=id
     }
     getfullname(){
         return this.Name + " " + this.lastname + " " + this.id
     }
     geteditname(newinfo){
         var nname = newinfo.split(" ")
         this.Name = nname[0]
         this.lastname = nname[1]
         this.id=nname[2]
     }
 }

 module.exports=student