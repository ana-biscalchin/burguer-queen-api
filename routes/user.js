const router = require("express").Router();
const models = require("../models");
const User = models.User;

router.get("/", (req, res) => {
  User.findAll().then(users => {
    const userList = users.map(user => user.dataValues);
    res.send(userList);
  });
});

router.get("/:id", (req, res) => {
  User.findByPk(req.params.id).then(user => res.send(user));
});

router.delete("/:id", (req, res) => {
  User.destroy({ where: { id: req.params.id } }).then(() =>
    res.sendStatus(200)
  );
});

router.put("/:id", (req, res) => {
  User.update({ ...req.body }, { where: { id: req.params.id } }).then(() => {
    User.findByPk(req.params.id).then(user => res.send(user.dataValues));
  });
});

router.post("/", (req, res) => {
  User.create(req.body).then(user => res.send(user));
});

module.exports = router;
