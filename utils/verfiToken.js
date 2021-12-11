const jwt = require('jsonwebtoken')
const verifToken = (req, res, next) => {
    let token = req.headers["x-access-token"]
    if(!token){
        res.json({
            success: false,
            message:"veuillez nous connecter !"
        })
    } else {
        let verif = jwt.verify(token, "THISISATOKEN")
        if(verif){
            next()
        } else {
            res.json({
                success: false,
                message: "Veuilez nous connecter !"
            })
        }
    }
}

module.exports = verfiToken 