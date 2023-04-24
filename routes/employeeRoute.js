const { registerEmployee, getEmployee, getEmployees, destroy, getDoctors } = require("../controllers/employeeController")

const router = require("express").Router()

router
    .get("/", getEmployees)
    .get("/doctors", getDoctors)
    .get("/:eid", getEmployee)
    .post("/register", registerEmployee)
    .delete("/destory", destroy)


module.exports = router