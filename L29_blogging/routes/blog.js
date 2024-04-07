const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, `./public/uploads/`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const {
  handleGetAddBlog,
  handlePostAddBlog,
  handleGetSingleBlog,
  handleAddNewComment,
} = require("../controllers/blog");

router.get("/add", handleGetAddBlog);
router.post("/", upload.single("coverImage"), handlePostAddBlog);
router.get("/:id", handleGetSingleBlog);

// comments
router.post("/comment/:blogId", handleAddNewComment);

module.exports = router;
