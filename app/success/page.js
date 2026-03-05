import Link from "next/link";

export default function Success() {
  return (
    <div className="page-container">
      <h2 className="text-large">Thank you for your purchase 🎉</h2>
      <Link href={"/"}>
        <button>Continue shopping &rarr;</button>
      </Link>
    </div>
  );
}
