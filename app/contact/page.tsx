export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-3xl font-bold">Contact</h2>
      <form className="mt-6 grid gap-4">
        <input className="w-full rounded border p-3" type="text" placeholder="Your Name" />
        <input className="w-full rounded border p-3" type="email" placeholder="Your Email" />
        <textarea className="w-full rounded border p-3" rows={5} placeholder="Your Message"></textarea>
        <button className="rounded bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Send Message
        </button>
      </form>

      <div className="mt-6 text-gray-700">
        <p>
          Or email me:{" "}
          <a className="text-blue-600 hover:underline" href="mailto:mohankumar.mk26@gmail.com">
            mohankumar.mk26@gmail.com
          </a>
        </p>
        <p className="mt-1">
          GitHub:{" "}
          <a className="text-blue-600 hover:underline" href="https://github.com/msn-digitalworld/mohankumar.github.io" target="_blank">
github.com/msn-digitalworld/
          </a>
        </p>
        <p className="mt-1">
          LinkedIn:{" "}
          <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/mohankr26/" target="_blank">
            linkedin.com/in/mohankr26/
          </a>
        </p>
      </div>
    </section>
  );
}
