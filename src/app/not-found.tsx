import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col justify-center py-24">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display mb-4 text-[clamp(2.5rem,6vw,4rem)]">Page not found.</h1>
      <p className="lede mb-8">That route does not exist in this portfolio.</p>
      <Link href="/" className="btn btn-primary w-fit">
        Return home
      </Link>
    </div>
  );
}
