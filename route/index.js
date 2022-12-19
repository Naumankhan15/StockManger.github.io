import express from "express";
import indexcontroller from "../controller/indexcontroller.js";
import mailapi from "./mailapi.js";

const indexRouter = express.Router();

indexRouter.get("/",(req,res)=>{
    res.render("home")
});

indexRouter.get("/about",(req,res)=>{
    res.render("about")
});

indexRouter.get("/login",(req,res)=>{
    res.render("login",{"output":""})
});

indexRouter.post("/login",(req,res)=>{
    indexcontroller.userLogin(req.body).then((result)=>{
        result.s==0 ? res.render("login",{"output":"Invalid user or verify your account"})
    : (result.s==1?res.redirect("/admin"):res.redirect("/user"))  
    }).catch((err)=>{
        res.render("login",{"output":err})
    })
    
});



indexRouter.get("/register",(req,res)=>{
    res.render("register",{"output":""}); 
});

indexRouter.post("/register",(req,res)=>{
    indexcontroller.userRegister(req.body).then((result)=>{
        mailapi.sendmail(req.body);
        res.render("register",{"output":"user register success"});
    }).catch((err)=>{
        res.render("register",{"output":err});
    })
    
});

export default indexRouter;