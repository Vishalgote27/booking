const asyncHandler = require("express-async-handler")
const Appointmnet = require("../models/Appointmnet")
exports.bookAppointment = asyncHandler(async (req, res) => {
    const result = await Appointmnet.create({
        ...req.body,
        bookingDate: new Date(`${req.body.date} ${req.body.time}`)
    })
    res.json({ message: "Booking Success", result })
})
exports.getAppointments = asyncHandler(async (req, res) => {
    const result = await Appointmnet.find()
    res.json({ message: "all appointments fetch success", result })
})
exports.getAppointment = asyncHandler(async (req, res) => {
    const result = await Appointmnet.findOne({ _id: req.params.aid })
    res.json({ message: "appointment deatail fetch  success", result })
})
exports.destroyAppointments = asyncHandler(async (req, res) => {
    const result = await Appointmnet.deleteMany()
    res.json({ message: "appointments destroy success", result })
})