const cart = require("../controllers/cart.controller")
const { auth, adminAuth } = require("../middleware/auth.middleware")
const router = require("express").Router()

router.post("/add/:id", auth, cart.add)

router.get("/myCart", auth, cart.myCart)
router.post("/updateCart", auth, cart.updateCart)
router.get("/myCart", cart.myCart)
router.delete("/deleteCart", auth, cart.deleteCart)
router.get("/allCart", auth, cart.allCart)


module.exports = router