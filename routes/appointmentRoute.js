const { getAppointment, getAppointments, bookAppointment, destroyAppointments } = require("../controllers/appointmentController")
const { authProtected } = require("../middlewares/auth")

const router = require("express").Router()

router
    .get("/", getAppointments)
    .get("/:aid", getAppointment)
    .post("/book", authProtected, bookAppointment)
    .delete("/destroy", destroyAppointments)


module.exports = router