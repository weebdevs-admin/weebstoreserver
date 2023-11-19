let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// post Model
let LogoSchema = require("../Models/Logo");

router.get("/", async (req, res, next) => {
  try {
    const data = await LogoSchema.find().exec();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.route("/create-logo").post(async (req, res, next) => {
  try {
    const data = await LogoSchema.create(req.body);
    console.log(data);
    res.json(data);
  } catch (error) {
    next(error);
  }
});




// Update post
router.route("/update-logo/:id").put(async (req, res, next) => {
  try {
    const data = await LogoSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("post updated successfully !");
    res.json(data);
  } catch (error) {
    next(error);
  }
});


// Delete post
router.route("/delete-logo/:id").delete(async (req, res, next) => {
  try {
    const data = await LogoSchema.findByIdAndDelete(req.params.id);
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
