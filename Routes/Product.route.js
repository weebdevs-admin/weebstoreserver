let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let productSchema = require("../Models/Product");



router.get("/", async (req, res, next) => {
  try {
    const data = await productSchema.find().exec();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.route("/create-post").post(async (req, res, next) => {
  try {
    const data = await productSchema.create(req.body);
    console.log(data);
    res.json(data);
  } catch (error) {
    next(error);
  }
});


// Update post
router.route("/update-post/:id").put(async (req, res, next) => {
  try {
    const data = await productSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("post updated successfully !");
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Delete post
router.route("/delete-post/:id").delete(async (req, res, next) => {
  try {
    const data = await productSchema.findByIdAndDelete(req.params.id);
    if (data) {
      res.status(200).json({
        msg: "Post deleted successfully",
      });
    } else {
      res.status(404).json({
        msg: "Post not found",
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
