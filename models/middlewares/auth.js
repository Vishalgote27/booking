
const jwt = require("jsonwebtoken")


exports.authProtected = (req, res, next) => {
    if (!req.cookies) {
        return res.status(401).json({
            message: "No Cokkie Found"
        })
    }
    const { token } = req.cookies
    if (!token) {
        return res.status(401).json({ message: " Token missing" })
    }
    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
        console.log(err);
        if (err) {
            return res.status(401).json({ message: "Invalid Token" })
        }
        const { id, role } = decode
        req.body.userId = id
        req.body.role = role
        next()
    })
}