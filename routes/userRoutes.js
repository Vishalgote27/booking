const { readUser, readUsers, register, login, continueWithGoogle, handleAccount, updateUser, deleteUser, destroyUsers } = require("../controllers/userController")

const router = require("express").Router()

router
    .get("/", readUsers)
    .get("/:id", readUser)
    .post("/register", register)
    .post("/login", login)
    .post("/continue-with-google", continueWithGoogle)
    .put("/account/:id", handleAccount)
    .put("/update/:id", updateUser)
    .delete("/destroy", destroyUsers)
    .delete("/:id", deleteUser)


module.exports = router