let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// post Model
let PaymentSchema = require("../Models/Payment");

router.get("/", async (req, res, next) => {
  try {
    const data = await PaymentSchema.find().exec();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.route("/create-payment").post(async (req, res, next) => {
  try {
    const data = await PaymentSchema.create(req.body);
    console.log(data);
    res.json(data);
  } catch (error) {
    next(error);
  }
});




// Update post
router.route("/update-payment/:id").put(async (req, res, next) => {
  try {
    const data = await PaymentSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("post updated successfully !");
    res.json(data);
  } catch (error) {
    next(error);
  }
});


// Delete post
router.route("/delete-payment/:id").delete(async (req, res, next) => {
  try {
    const data = await PaymentSchema.findByIdAndDelete(req.params.id);
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
