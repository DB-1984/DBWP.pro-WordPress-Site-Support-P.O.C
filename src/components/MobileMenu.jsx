export default function MobileMenu() {
  return (
    <details className="group relative md:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-lg border border-zinc-200 px-3 text-sm font-semibold text-zinc-950 marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 [&::-webkit-details-marker]:hidden">
        <span>Menu</span>
        <span
          aria-hidden="true"
          className="text-lg leading-none group-open:hidden"
        >
          ☰
        </span>
        <span
          aria-hidden="true"
          className="hidden text-lg leading-none group-open:inline"
        >
          ×
        </span>
      </summary>
      <nav
        aria-label="Mobile navigation"
        className="absolute right-0 top-[calc(100%+1rem)] z-30 w-[min(18rem,calc(100vw-2.5rem))] rounded-xl border border-zinc-200 bg-white p-2 shadow-xl shadow-zinc-950/10"
      >
        {[
          ["Services", "#services"],
          ["Work", "#work"],
          ["Approach", "#approach"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="block rounded-lg px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-100 focus-visible:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-emerald-700"
          >
            {label}
          </a>
        ))}
      </nav>
    </details>
  );
}
