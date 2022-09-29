import { Router } from "express";

import { body, validationResult } from "express-validator";
import handleInputValidator from "./modules/middleware.js";
const router = Router();

/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: "this is message" });
});

router.get("/product/:id", (req, res) => {});

router.post(
  "/product",
  body("name").isString(),
  handleInputValidator,
  (req, res) => {}
);

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputValidator,
  (req, res) => {}
);

router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */

router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post("/update", (req, res) => {});

router.put("/update/:id", (req, res) => {});

router.delete("/update/:id", (req, res) => {});

/**
 * Update Point
 */

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", (req, res) => {});

router.put("/updatepoint/:id", (req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
