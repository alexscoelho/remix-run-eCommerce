import { Link } from "@remix-run/react";

export default function AdminIndex() {
  return (
    <p>
      <Link to='new'>Add a new image</Link>
    </p>
  );
}
