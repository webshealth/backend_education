const Bootcamp = require('../models/Botcamp');

//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({
      success: true,
      count: bootcamp.length,
      data: bootcamp,
    });
  } catch (error) {
    console.log(res.status(400).json({ success: false }));
  }
};

//@desc Get single bootcamps
//@route GET /api/v1/bootcamps/:id
//@access Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    console.log(res.status(400).json({ success: false }));
  }
};

//@desc Create new bootcamps
//@route POST /api/v1/bootcamps
//@access Private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    console.log(res.status(400).json({ success: false }));
  }
};

//@desc Update bootcamps
//@route POST /api/v1/bootcamps/:id
//@access Private

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    console.log(res.status(400).json({ success: false }));
  }
};

//@desc Delete bootcamps
//@route DELETE /api/v1/bootcamps/:id
//@access Private

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    console.log(res.status(400).json({ success: false }));
  }
};
