import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">VIT Chennai Event Portal</p>
        <h1 className="text-4xl font-semibold">Secure, MongoDB-backed event management in one Next.js app.</h1>
        <p className="mt-4 text-slate-300">
          The portal now runs as a single Next.js application with API routes, so you can deploy everything to one host without a separate backend service.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/login" className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950">Go to login</Link>
          <Link href="/api/health" className="rounded-lg border border-slate-700 px-4 py-2">Check API health</Link>
        </div>
      </div>
    </main>
  );
}
