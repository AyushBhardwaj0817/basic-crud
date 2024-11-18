import express from "express";
import { addUser, deleteUser, getAllUser,updateUser } from "../controller/userController.js";
import { addCustomer, deleteCustomer, getAllCustomer, updateCustomer } from "../controller/customerController.js";
import { addProgramme, deleteProgramme, getAllProgramme, updateProgramme } from "../controller/programmeController.js";
import { addAgency, deleteAgent, getAllAgency, updateAgency } from "../controller/agencyController.js";
import { addWork, deleteWork, getAllWork, updateWork } from "../controller/workController.js";
import { authenticateJWT } from "../middleware/authMiddleware.js";
import { getToken } from "../controller/jwtToken.js";


const router=express.Router();

// User Api

router.get("/getAll",authenticateJWT,getAllUser);
router.post("/addUser",authenticateJWT,addUser);
router.put("/User/:id",authenticateJWT,updateUser);
router.delete("/User/:id",authenticateJWT,deleteUser);

// Customer Api

router.get("/getAllCustomer",authenticateJWT,getAllCustomer);
router.post("/addCustomer",authenticateJWT,addCustomer);
router.put("/Customer/:id",authenticateJWT,updateCustomer);
router.delete("/Customer/:id",authenticateJWT,deleteCustomer);

// Programme Api

router.get("/getAllProgramme",authenticateJWT,getAllProgramme);
router.post("/addProgramme",authenticateJWT,addProgramme);
router.put("/Programme/:id",authenticateJWT,updateProgramme);
router.delete("/Programme/:id",authenticateJWT,deleteProgramme);


// Agency Api

router.get("/getAllAgent",authenticateJWT,getAllAgency);
router.post("/addAgency",authenticateJWT,addAgency);
router.put("/Agency/:id",authenticateJWT,updateAgency);
router.delete("/Agency/:id",authenticateJWT,deleteAgent);


// Work Api

router.get("/getAllWork",authenticateJWT,getAllWork);
router.post("/addWork",authenticateJWT,addWork);
router.put("/Work/:id",authenticateJWT,updateWork);
router.delete("/Work/:id",authenticateJWT,deleteWork);

// getToken

router.get("/getToken",getToken);

export default router;


