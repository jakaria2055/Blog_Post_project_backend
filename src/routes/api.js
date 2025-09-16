import express from "express";
import { UserLogin, UserRegistration } from "../controllers/UserController.js";
import { AuthVerification } from "../middlewares/AuthVerification.js";
import { CreateBlog, DeleteBlog, EditBlog, ReadBlog } from "../controllers/BlogController.js";

const router = express.Router();

//USER
router.get("/UserRegistration/:email", UserRegistration);
router.get("/UserLogin/:email/:otp", UserLogin);

//CRUD OPERATIOn IN BLOG
router.post("/CreateBlog", AuthVerification, CreateBlog);
router.get("/ReadBlog", ReadBlog);
router.put("/EditBlog/:blogId", AuthVerification, EditBlog);
router.delete("/DeleteBlog/:blogId", AuthVerification, DeleteBlog);


export default router;