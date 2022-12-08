import express from "express";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";
import { signupUser, loginUser } from "../controller/user-controller.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;
