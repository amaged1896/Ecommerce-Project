const order = require("../controllers/order.controller")
const { auth, adminAuth } = require("../middleware/auth.middleware")
const router = require("express").Router()

router.post("/add/:id", auth, order.add)
router.post("/updateOrder", auth, order.updateOrder)
router.get("/myOrder", auth, order.myOrder)
router.get("/allOrder", auth, order.allOrder)
router.get("/statusOrder", adminAuth, order.statusOrder)

router.delete("/deleteOrder", auth, order.deleteOrder)


module.exports = router