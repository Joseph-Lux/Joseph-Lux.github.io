module.exports = (app, Product) => {
  app.get("/api/store", (req, res) => {
    res.send("hi there");
  });

  app.get("/api/createproduct", (req, res) => {
    new Product({
      id: 1003,
      link: "/product/sacred-heart",
      title: "Sacred Heart Print",
      shortDesc: "Print of the Sacred Heart signed by the artist",
      thumbnail: "/SacredHeartSquare.jpg",
      image: "/SacredHeart.jpg",
      price: 350,
      fullDesc: "",
      stock: 1,
      category: "oil",
    }).save();
  });

  app.get("/api/productlist", (req, res) => {
    Product.find({}).then((result) => {
      res.send(result);
    });
  });

  app.get("/api/product/:productSlug", async (req, res) => {
    const { productSlug } = req.params;
    try {
      const product = await Product.findOne({ id: productSlug });
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.send(product);
    } catch (error) {
      console.error("Error finding product:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
};
