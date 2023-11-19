let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// post Model
let LoginSchema = require("../Models/Login");

router.get("/", async (req, res, next) => {
  try {
    const data = await LoginSchema.find().exec();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.route("/create-login").post(async (req, res, next) => {
  try {
    const data = await LoginSchema.create(req.body);
    console.log(data);
    res.json(data);
  } catch (error) {
    next(error);
  }
});




// Update post
router.route("/update-login/:id").put(async (req, res, next) => {
  try {
    const data = await LoginSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("post updated successfully !");
    res.json(data);
  } catch (error) {
    next(error);
  }
});


// Delete post
router.route("/delete-login/:id").delete(async (req, res, next) => {
  try {
    const data = await LoginSchema.findByIdAndDelete(req.params.id);
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
