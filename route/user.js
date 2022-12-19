import express from "express";

const userRouter = express.Router();

userRouter.get("/",(req,res)=>{
    res.render("userhome")
});

export default userRouter;
