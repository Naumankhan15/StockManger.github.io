import express from "express";
import * as path from "path";
import * as url from "url";
import bodyParser from "body-parser";


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


import adminRouter from "./route/admin.js";
import userRouter from "./route/user.js";
import indexRouter from "./route/index.js ";

//route level middleware
app.use("/admin",adminRouter)
app.use("/user",userRouter)
app.use("/",indexRouter)




//configuration to load template page
app.set("view engine","ejs")
app.set("views","./views")



// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.use(express.static(path.join(__dirname,"public")))


app.listen(5000,()=>{
    console.log("server is continue running");
})