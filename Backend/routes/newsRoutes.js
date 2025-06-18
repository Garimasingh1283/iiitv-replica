const express = require("express");
const router = express.Router();
const {
  getAllNews,
  createNewsItem,
} = require("../controllers/newsController");

router.get("/", getAllNews);
router.post("/", createNewsItem);

module.exports = router;
