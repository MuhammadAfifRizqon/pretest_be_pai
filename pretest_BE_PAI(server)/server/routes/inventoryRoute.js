import  Router  from "express";
import inventoryCtrl from "../controllers/inventoryCtrl";
import { verifyAdmin, verifyUser } from "../utillities/verifyToken";

const router = new Router()

router.get('/',inventoryCtrl.findAll)
router.get('/:id',inventoryCtrl.findOne)
router.post('/',verifyAdmin,inventoryCtrl.create)
router.put('/:id',verifyAdmin,inventoryCtrl.update)
router.get('/:id',verifyAdmin,inventoryCtrl.deleted)

export default router