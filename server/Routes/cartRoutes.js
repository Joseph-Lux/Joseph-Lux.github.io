module.exports = (app, Product, stripe) => {
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

  app.post("/create-checkout-session", async (req, res) => {
    const priceID = {
      1001: "price_1PBisMBdvNqnRYH7gPXaW504",
      1002: "price_1PBipNBdvNqnRYH7U0LwlWQI",
      1003: "price_1PBitJBdvNqnRYH7HUgtd8zT",
    };

    let items = [];

    if (!req.session.cart) {
      return res
        .status(500)
        .json({ error: "Internal server error. No item was found in cart." });
    }

    Object.keys(req.session.cart).forEach((id) => {
      items.push({ price: priceID[id], quantity: req.session.cart[id] });
    });

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",

      line_items: items,
      mode: "payment",
      return_url: `http://localhost:3000/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    res.send({ clientSecret: session.client_secret });
  });

  app.get("/session-status", async (req, res) => {
    console.log("session-status triggered.");
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );

    res.send({
      status: session.status,
      customer_email: session.customer_details.email,
    });
  });
};
