module.exports = (app) => {
  app.post("/cart/add", (req, res) => {
    const { id, quantity } = req.body;
    req.session.cart = req.session.cart || {};
    req.session.cart[id] = req.session.cart[id]
      ? req.session.cart[id] + quantity
      : quantity;
    res.send();
  });

  app.get("/cart", (req, res) => {
    res.send(req.session.cart || {});
  });
};
