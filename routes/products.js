const router = require("express").Router();
const models = require("../models");
const Products = models.Products;

router.get("/", (req, res) => {
  Products.findAll().then(products => {
    const ProductsList = products.map(products => products.dataValues);
    res.send(ProductsList);
  });
});

router.get("/:id", (req, res) => {
  Products.findByPk(req.params.id).then(products => res.send(user));
});

router.delete("/:id", (req, res) => {
  Products.destroy({ where: { id: req.params.id } }).then(() => res.sendStatus(200)
  );
});

router.put("/:id", (req, res) => {
  Products.update({ ...req.body }, { where: { id: req.params.id } }).then(
    () => {
      Products.findByPk(req.params.id).then(products =>
        res.send(products.dataValues)
      );
    }
  );
});

router.post("/", (req, res) => {
  Products.create(req.body).then(products => res.send(products));
});

module.exports = router;
