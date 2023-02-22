const { Article, User } = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

// Display a listing of the resource.
async function index(req, res) {
  if (req.query.userid) {
    const articles = await Article.findAll({ where: { userId: req.params.id } });
    return res.json(articles);
  } else if (req.query.title) {
    const articles = await Article.findAll({
      where: { title: { [Op.substring]: req.query.title } },
    });
    return res.json(articles);
  }
  const articles = await Article.findAll();
  return res.json(articles);
}

// Display the specified resource.
async function show(req, res) {}

async function tokens(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    const march = await user.isValidPassword(req.body.password);
    if (march) {
      const token = jwt.sing({ sub: user.id }, process.env.JWT_SECRET);
      res.json({ token: token });
    }
  }
  return res.send("error");
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  tokens,
};
