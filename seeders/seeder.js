const { faker } = require("@faker-js/faker");
const { Article, User, Comment,Rol } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";


module.exports = async () => {
  const rols=[];
  const users = [];
  const articles = [];
  const comments = [];
  for (let i = 0; i < 5; i++) {
    users.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: await bcrypt.hash("1234", 8),
      rolId: Math.floor(Math.random() * 3) + 1,
    });
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(5),
      img: faker.image.nature(480, 480, true),
      userId: Math.floor(Math.random() * 4) + 1,
    });
    comments.push({
      content: faker.lorem.paragraphs(2),
      userId: Math.floor(Math.random() * 4) + 1,
      articleId: Math.floor(Math.random() * 4) + 1,
    });
  }

  users.push({
    username: "pepe",
    email: "pepe@gmail.com",
    password: await bcrypt.hash("1234", 8),
    rolId:4
  });

  rols.push({
    name:"reader"
  });
  rols.push({
    name:"writer"
  });
  rols.push({
    name:"editor"
  });
  rols.push({
    name:"admin"
  });

  await Rol.bulkCreate(rols);
  await User.bulkCreate(users);
  await Article.bulkCreate(articles);
  await Comment.bulkCreate(comments);


};
