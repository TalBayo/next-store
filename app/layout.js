import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "Next Store",
  description:
    "An e-commerce platform built with Next.js for developers and productivity enthusiasts.",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          <div id="portal" />
          <div id="app">
            <header>
              <div className="header-content">
                <Link href={"/"}>
                  <h1>Next-Store</h1>
                </Link>
                <h5 className="mid-text">
                  - Quality tools and products for developers -
                </h5>
                <Cart />
              </div>
            </header>
            <main>{children}</main>
            <div className="hr" />
            <footer>
              <div className="email-container">
                <h5>
                  Get a sneak peek at new additions to the store commerce,
                  special offers and much more.
                </h5>
                <EmailInput />
              </div>
              <div className="links-container">
                <div>
                  <h3>Next-Store</h3>
                  <Link href={"/"} target="_blank">
                    Next-Store Hub
                  </Link>
                  <Link href={"/roadmap"} target="_blank">
                    Roadmap
                  </Link>
                </div>
                <div>
                  <h3>Store</h3>
                  <Link href={"/"}>Home</Link>
                  <Link href={"/cart"}>Cart</Link>
                </div>
              </div>
              <div className="socials">
                <p>
                  Created by{" "}
                  <a href="https://github.com/talbayo" target="_blank">
                    Tal Bayo
                  </a>
                  <br />
                  Built with{" NextJS & "}
                  <a href="https://fantacss.smoljames.com" target="_blank">
                    FantaCSS
                  </a>
                </p>
                <div className="social-links">
                  <Link href={"https://github.com/TalBayo"} target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/tal-bayo-48a433224/"}
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ProductsProvider>
  );
}
{
}
