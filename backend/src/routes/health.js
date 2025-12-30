const router = require("express").Router();
const {health}=require("../controller/healthController");
router.get("/health", health);
module.exports=router;
