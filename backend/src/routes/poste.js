const router = require("express").Router();

const {createPoste,getPoste,viewPostPage} = require("../controller/posteController");

router.post("/postes",createPoste);
router.get("/postes/:id",getPoste);
router.get("/p/:id",viewPostPage);

module.exports =router;
