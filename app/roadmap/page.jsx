export const metadata = {
  title: "Next-Store Roadmap",
};

function Badge({ type }) {
  const map = {
    done: { icon: "✅", label: "Completed" },
    progress: { icon: "🚧", label: "In Progress" },
    planned: { icon: "🔜", label: "Planned" },
  };

  const badge = map[type];

  return (
    <span className={`badge badge-${type}`}>
      {badge.icon} {badge.label}
    </span>
  );
}

function Phase({ title, status, children }) {
  return (
    <section className="phase">
      <div className="phase-header">
        <h2>{title}</h2>
        <Badge type={status} />
      </div>
      <ul>{children}</ul>
    </section>
  );
}

export default function RoadmapPage() {
  return (
    <main className="roadmap-container">
      <h1>Next-Store Roadmap</h1>
      <p className="roadmap-subtitle">
        Product development plan & upcoming improvements
      </p>

      <Phase title="Phase 1 — Core (MVP)" status="done">
        <li>Product listing</li>
        <li>Product details page</li>
        <li>Add / Remove from cart</li>
        <li>Cart counter in Navbar</li>
        <li>Persist cart (localStorage)</li>
        <li>Responsive layout</li>
      </Phase>

      <Phase title="Phase 2 — Authentication" status="done">
        <li>Protected routes</li>
        <li>Session handling</li>
      </Phase>

      <Phase title="Phase 3 — Checkout & Orders" status="done">
        <li>Edit products</li>
        <li>Checkout page</li>
        <li>Order summary</li>
        <li>Order history</li>
        <li>Stripe integration</li>
      </Phase>

      <Phase title="Phase 4 — Performance & UX" status="done">
        <li>Order management</li>
        <li>Role-based access</li>
        <li>Image optimization</li>
      </Phase>

      <Phase title="Phase 5 — Admin Panel" status="progress">
        <li>Add / Edit / Delete products in the admin dashboard</li>
        <li>Manage orders and track status</li>
        <li>Implement role-based access control for admin users</li>
        <li>
          Create contact form handler (<code>handleSubmit</code>) to send emails
          to backend and log errors
        </li>
        <li>Ensure proper error handling and display feedback to the user</li>
      </Phase>
    </main>
  );
}
