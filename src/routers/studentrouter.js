const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.get("/students", async (req, res) => {
  try {
    const finddata = await Student.find();
    res.status(200).send(finddata);
  } catch (e) {
    res.status(404).send(e);
  }
});

// To get the data using id

router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const findonedata = await Student.findById(_id);
    // console.log(findonedata);
    res.status(201).send(findonedata);
  } catch (e) {
    res.status(404).send(e);
  }
});

// To Update the Data

router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedata = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(updatedata);
  } catch (e) {
    res.status(404).send(e);
  }
});

// To Delete Data

router.delete("/students/:id", async (req, res) => {
  try {
    const deletedata = await Student.findByIdAndDelete(req.params.id);
    res.status(201).send(deletedata);
  } catch (e) {
    res.status(500).send(e);
  }
});

// To add the data

router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const userData = await user.save();
    res.status(201).send(userData);
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = router;
