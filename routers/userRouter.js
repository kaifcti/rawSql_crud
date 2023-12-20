const express = require("express")
const routes = express.Router()
const { insertIntoDb,getData,updateData,deleteData,allDetails } = require("../controller/userController")

routes.post("/insertUser", insertIntoDb)
routes.get("/allDetails",allDetails)
routes.get("/userDetails/:id",getData)
routes.put("/updateUser/:id",updateData)
routes.delete("/deleteUser/:id",deleteData)



module.exports = routes;