const usermodel=require('../Models/userModel')


module.exports.first = async (req,res)=>{
    const adduser = new usermodel(req.body)
await adduser.save()
}
module.exports.second = (req,res)=>{
    res.send('anu@gmail.com')

}
module.exports.third = (req,res)=>{
    res.send('123')

}