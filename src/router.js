const { Router } = require("express");
const { appendFile } = require("fs");

const { createNewUser, signin } = require("./handlers/user");

const router = Router();

/*****
 *
 * create account
 *
 ** */
router.post("/user", createNewUser);

router.post("/signin", signin);
/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: "this is message" });
});

router.get("/product/:id", (req, res) => {});

router.post("/product", (req, res) => {});

router.put("/product/:id", (req, res) => {});

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

module.exports = router;
