module.exports = (app) => {
  app.post("/cart/add", (req, res) => {
    const { id, quantity } = req.body;
    req.session.cart = req.session.cart || {};
    req.session.cart[id] = req.session.cart[id]
      ? req.session.cart[id] + quantity
      : quantity;

    req.session.cartCount = req.session.cartCount + quantity || quantity;

    res.send();
  });

  app.get("/cart", (req, res) => {
    res.send(req.session.cart || {});
  });

  app.get("/cart/count", (req, res) => {
    req.session.cartCount = req.session.cartCount || 0;
    const cartCountResponse = { cartCount: req.session.cartCount };
    res.send(cartCountResponse);
  });
};
