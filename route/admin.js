import express from "express";
import admincontroller from "../controller/admincontroller.js ";

const adminRouter = express.Router();

adminRouter.get("/",(req,res)=>{
    res.render("admin home page")
})

export default adminRouter;