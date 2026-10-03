

const FORMSPREE_URL = "https://formspree.io/f/xdalddke";

const fieldClass =
  "mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-zinc-800 focus:ring-2 focus:ring-zinc-700/20";

export default function ContactForm({ Icon }) {
  return (
    <form action={FORMSPREE_URL} method="POST" className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-xs font-bold text-zinc-800">
          Your name
          <input
            className={fieldClass}
            type="text"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
          />
        </label>
        <label className="block text-xs font-bold text-zinc-800">
          Email address
          <input
            className={fieldClass}
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label className="block text-xs font-bold text-zinc-800">
        What do you need help with?
        <textarea
          className={fieldClass + " min-h-40 resize-y"}
          name="message"
          required
          minLength={10}
          maxLength={5000}
          placeholder="A little about your project or problem…"
        />
      </label>
      <button
            type="submit"
            className="inline-flex min-h-12 items-center gap-6 rounded-lg bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-700"
          >
            Send enquiry
            {Icon && <Icon aria-hidden="true" size={16} />}
          </button>

      <p className="text-xs leading-5 text-zinc-500">
        Your details will only be used to respond to your enquiry.
      </p>
    </form>
  );
}
