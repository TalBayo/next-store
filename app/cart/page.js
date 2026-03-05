"use client";

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  const { cart, handleIncrementProduct } = useProducts();

  async function createCheckout() {
    try {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
      const lineItems = Object.keys(cart).map((product, productIndex) => {
        return {
          price: product,
          quantity: cart[product].quantity,
        };
      });
      const response = await fetch(`${baseURL}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        router.push(data.url);
      }
    } catch (err) {
      console.error("Error creating checkout session:", err.message);
    }
  }

  return (
    <section className="cart-section">
      <h2>Your Cart</h2>
      <div className="cart-container">
        {Object.keys(cart).length === 0 ? (
          <p>Your cart is empty :(</p>
        ) : (
          Object.keys(cart).map((product, productIndex) => {
            const productData = cart[product];
            const productQuantity = productData?.quantity;
            const imgName =
              productData.name === "Medieval Dragon Month Planner"
                ? "planner"
                : productData.name
                    .replaceAll(" Sticker.png", "")
                    .replaceAll(" ", "_");
            const imgURL = `low_res/${imgName}.jpeg`;
            return (
              <div key={productIndex} className="cart-item">
                <img src={imgURL} alt={`${imgName}-img`} />
                <div className="cart-item-info">
                  <h3>{productData.name}</h3>
                  <p>
                    {productData.description.slice(0, 100)}
                    {productData.description.length > 100 ? "..." : ""}{" "}
                  </p>
                  <h4>
                    <span>$</span>
                    {productData.prices[0].unit_amount / 100}
                  </h4>
                  <div className="quantity-container">
                    <p>
                      <strong>Quantity:</strong>
                    </p>
                    <input
                      type="number"
                      value={productQuantity}
                      placeholder="1"
                      onChange={(e) => {
                        const newQuantity = e.target.value;
                        handleIncrementProduct(
                          productData.default_price,
                          newQuantity,
                          productData,
                          true,
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="checkout-container">
        <Link href={"/"}>
          <button>&larr; Continue Shopping</button>
        </Link>
        <button onClick={createCheckout}>Proceed to Checkout &rarr;</button>
      </div>
    </section>
  );
}
