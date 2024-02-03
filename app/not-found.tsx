import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="margin-auto">
      <h2>404 - Not Found</h2>
      <p className="margin-block-50">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
