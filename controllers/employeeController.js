const asyncHandler = require("express-async-handler")
const Employee = require("../models/Employee")
const bcrypt = require("bcrypt")
exports.registerEmployee = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const found = await Employee.findOne({ email })
    if (found) {
        return res.status(400).json({ message: "email aready exist" })
    }
    const hashPass = bcrypt.hashSync(password, 10)

    const result = await Employee.create({ ...req.body, password: hashPass })
    res.json({
        message: "employee register success"
    })
})
exports.getEmployees = asyncHandler(async (req, res) => {
    const result = await Employee.find()
    res.json({
        message: "employees fetch success",
        result
    })
})
exports.getEmployee = asyncHandler(async (req, res) => {
    const result = await Employee.findOne({ _id: req.params.eid })
    res.json({
        message: "employee detail fetch success",
        result
    })
})

exports.getDoctors = asyncHandler(async (req, res) => {
    const result = await Employee.find({ role: "doctor" }).select("name category")
    res.json({
        message: "doctor fetch success",
        result
    })
})

exports.destroy = asyncHandler(async (req, res) => {
    const result = await Employee.deleteMany()
    res.json({
        message: "employee destroy success",
        result
    })
})

