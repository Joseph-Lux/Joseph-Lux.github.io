module.exports = (app, Product) => {
  app.post("/cart/add", (req, res) => {
    const { id, quantity } = req.body;
    req.session.cart = req.session.cart || {};
    req.session.cart[id] = req.session.cart[id]
      ? req.session.cart[id] + quantity
      : quantity;

    req.session.cartCount = req.session.cartCount + quantity || quantity;

    res.send();
  });

  app.post("/cart/remove", (req, res) => {
    const { id } = req.body;
    req.session.cart = req.session.cart || {};
    if (!req.session.cart.hasOwnProperty(id)) {
      return res.status(400).json({ error: "Item not found in cart." });
    }
    req.session.cartCount = req.session.cartCount - req.session.cart[id];

    delete req.session.cart[id];
    res.send();
  });

  app.get("/cart", async (req, res) => {
    const cartRes = {};

    console.log(req.session.cart);
    for (let key in req.session.cart) {
      try {
        const product = await Product.findOne({ id: key });
        if (!product) {
          res.status(404).json({ error: "Product not found" });
        }
        cartRes[key] = { product: product, quantity: req.session.cart[key] };
      } catch (error) {
        console.error("Error finding product:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }

    res.send(cartRes);
  });

  app.get("/cart/count", (req, res) => {
    req.session.cartCount = req.session.cartCount || 0;
    const cartCountResponse = { cartCount: req.session.cartCount };
    res.send(cartCountResponse);
  });
};
