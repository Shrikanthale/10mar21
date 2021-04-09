let users=[] //this will act as auser table(database)... later will replace with db call

export const getUsers=(req,res)=>{
    console.log("in function call getUsers...I think this '/users'  endpoint got hit")
    res.send(users)
}
export const createUser=(req,res)=>{
    console.log("in function call createUsers...I think this '/users'  endpoint got hit")
    res.send("okay.. thats it ")
}