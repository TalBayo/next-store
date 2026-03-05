# 🛍️ Next-Store

A modern **e-commerce demo store** built with **Next.js** that demonstrates product browsing, cart management, and scalable frontend architecture.

The project focuses on **clean UI structure, global state management, and responsive design**.

---

# 🚀 Live Demo

Coming soon

---

# ⚙️ Tech Stack

Frontend

* Next.js
* React
* JavaScript
* CSS

## State Management

- React Context API — global cart state management for the shopping cart (shared between product pages and cart page)

**Backend / Other**

* Next.js API Routes (serverless backend)
* REST API endpoints
* Stripe integration for checkout
* React Portal
* Responsive Grid Layout

---

# ✨ Features

### Storefront

* Product catalog
* Planner highlight section
* Sticker catalog
* Responsive layout

### Shopping Cart

* Add products to cart
* Update quantity
* Remove items
* Cart summary

### Image Viewer

* Click image to zoom
* Portal overlay viewer
* Background underlay

### Contact

* Email subscription form
* Contact submission handler
* Error handling

---

# 🧠 Architecture Highlights

This project demonstrates several important frontend patterns:

* **Global state management using React Context API**
* Avoids prop drilling by using global context for cart state
* **React Portals** for modal / image overlay rendering
* **Component-based architecture**
* **Responsive CSS grid layouts**
* **Progressive UI loading patterns**

---

# 🗂 React Context State Management

The project uses **React Context API** to manage global cart state across the application.

The cart context keeps track of:

* cart items
* product quantities
* add/remove item actions

Using React Context avoids prop drilling and allows multiple components (product cards, cart page) to access and update the same cart state.


# 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/next-store.git
```

Navigate to the project directory

```bash
cd next-store
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Open in browser

```
http://localhost:3000
```
---

# 🗺️ Roadmap

### Phase 1 — Store UI ✅

* Product display
* Planner section
* Sticker catalog
* Responsive layout

### Phase 2 — Cart System ✅

* Add to cart
* Remove items
* Quantity updates
* Cart summary

### Phase 3 — Image Portal Viewer ✅

* Image zoom
* Portal overlay
* Background underlay

### Phase 4 — Contact System 🚧

* Email input
* Contact form UI
* `handleSubmit` implementation
* Backend request for email submission

### Phase 5 — Admin Panel 🔜

* Product management
* Order management
* Admin authentication

---

# 🔮 Future Improvements

* Payment integration (Stripe)
* User authentication
* Order history
* Admin dashboard
* Skeleton loaders for product loading
