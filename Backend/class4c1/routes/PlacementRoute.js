const express=require("express")
const router=express.Router();
const PlacementController=require("../controllers/CreatePlacement.js");
const GetPlacementController=require("../controllers/GetPlacement.js");
const GetPlacementById=require("../controllers/GetPlacementById.js");
const UpdatePlacementById=require("../controllers/UpdatePlacement.js");
const DeletePlacementByid=require("../controllers/DeletePlacement.js")

router.post("/placement-create",PlacementController);
router.get("/get-placement",GetPlacementController);
router.get("/get-placementbyid/:id",GetPlacementById);
router.put("/update-placement/:id",UpdatePlacementById);
router.delete("/delete-placementbyid/:id",DeletePlacementByid);
 module.exports=router;