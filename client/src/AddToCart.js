import serverURL from "./GetServerURL";

const AddToCart = (id, quantity) => {
  fetch(`${serverURL}/cart/add`, {
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

export default AddToCart;
