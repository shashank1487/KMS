const Tag = require("../models/tagModel");
const { asyncWrapper } = require("../utils/helper");

exports.addTag = asyncWrapper(async (req, res, next) => {
  const { name, category } = req.body;
  const newTag = await Tag.create({
    name,
    category
  });
  res.status(201).json({
    status: "success",
    data: {
      tag: newTag
    }
  });
});

exports.getTags = asyncWrapper(async (req, res, next) => {
  const tags = await Tag.find({});
  res.status(201).json({
    status: "success",
    length: tags.length,
    data: {
      tags
    }
  });
});
