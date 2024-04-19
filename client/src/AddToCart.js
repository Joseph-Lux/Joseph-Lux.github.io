module.exports = (id, quantity) => {
  console.log("Add to cart method triggered.");
  console.log(id);
  console.log(quantity);
  console.log(JSON.stringify({ id, quantity }));
  fetch("http://localhost:5000/cart/add", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, quantity }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Item added to cart successfully");
      } else {
        console.error("Failed to add item to cart");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
