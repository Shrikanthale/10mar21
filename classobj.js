/*class student {
    constructor(Name, clgName, Id){
        this.Name = Name
        this.clgName = clgName
        this.Id = Id
    }
}
const std1 = new student("harry","oxford",234)
console.log(std1)
*/

/*
class student {
    constructor(Name,clgName,Id){
        this.Name = Name
        this.clgName = clgName
        this.Id = Id
    }
}
var std1 =new student("cris","tokeyo", 458)
console.log(std1)
var std2 = new student("adel","nayar",123)
console.log(std2)
*/

/*
class employe {
    constructor(Name,Lastname,Id,salary){
        this.Name = Name
        this.Id = Id
        this.salary = salary
        this.Lastname=Lastname
    }
    getfullname() {
        let fullname = this.Name +" " + this.Lastname
        return fullname ;
    }
}
var emp1 = new employe("nova","sena",589,75000)
//console.log(emp1.Lastname)
//console.log(emp1.Name)
//console.log(emp1.Id)
//console.log(emp1.salary)
console.log(emp1.getfullname());
*/

/*
class employe {
    constructor(Name,LastName,id,salary){
        this.Name = Name
        this.LastName = LastName 
        this.id = id 
        this.salary = salary
    }
    getfullname(){
        let fullname = this.Name + " " + this.LastName
        return fullname
    }
}
let emp1 = new employe("sam","curran",458,85000)
console.log(emp1.getfullname())
*/

/*
class employe {
    constructor(name , lname , id){
        this.name=name
        this.lname=lname
        this.id=id
    }
    getfullname() {
        let fullname = this.name + " " + this.lname
        return fullname
    }
    getedit(newname){
       const myname = newname.split(" ")
       this.name = myname[0]
       this.lname = myname[1]
    }
}
const emp1 = new employe("sam","curran",100)
console.log(emp1.getfullname())
emp1.getedit("tom curran")
console.log(emp1.getfullname())
*/
/*
class person {
    constructor(Name,lastname,job){
        this.Name=Name
        this.lastname=lastname
        this.job=job
    }
    getfulname(){
        var fullname = this.Name + " " + this.lastname
        return fullname
    }
    getedit(newname){
       const nname = newname.split(" ")
       this.Name = nname[0]
       this.lastname = nname[1]  
    }

}
var p1 = new person("faf","duplesses","cricketer")
console.log(p1)
console.log(p1.getfulname())
p1.getedit("sam billings")
console.log(p1.getfulname())
*/

class cricket {
    constructor(name,middlename,lastname,job){
        this.name=name
        this.middlename=middlename
        this.lastname=lastname
        this.job=job
    }
    getfullname(){
        let fullname = this.name + " " + " " + this.middlename + " " + this.lastname
        return fullname 
    }
    getedit(newname){
        const nname = newname.split(" ")
        this.name = nname[0]
        this.middlename = nname[1] 
        this.lastname = nname[2]
    }
}
var cric1 = new cricket("jason" , "alex" , "roy" , "batsman")
//console.log(cric1)
console.log(cric1.getfullname())
cric1.getedit("johny clay bristrow")
console.log(cric1.getfullname())