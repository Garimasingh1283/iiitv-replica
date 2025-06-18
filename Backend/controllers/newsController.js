const NewsItem = require("../models/NewsItem");

exports.getAllNews = async (req, res) => {
  try {
    const data = await NewsItem.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching news" });
  }
};

exports.createNewsItem = async (req, res) => {
  const { category, points } = req.body;
  try {
    const item = new NewsItem({ category, points });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: "Error creating news item" });
  }
};
