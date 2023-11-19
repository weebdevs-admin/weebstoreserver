let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// post Model
let FooterSchema = require("../Models/Footer");

router.get("/", async (req, res, next) => {
  try {
    const data = await FooterSchema.find().exec();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.route("/create-footer").post(async (req, res, next) => {
  try {
    const data = await FooterSchema.create(req.body);
    console.log(data);
    res.json(data);
  } catch (error) {
    next(error);
  }
});




// Update post
router.route("/update-footer/:id").put(async (req, res, next) => {
  try {
    const data = await FooterSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("post updated successfully !");
    res.json(data);
  } catch (error) {
    next(error);
  }
});


// Delete post
router.route("/delete-footer/:id").delete(async (req, res, next) => {
  try {
    const data = await FooterSchema.findByIdAndDelete(req.params.id);
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
