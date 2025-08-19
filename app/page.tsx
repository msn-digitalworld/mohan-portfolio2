import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24">
      <h1 className="text-5xl font-extrabold tracking-tight">Hi, I’m Mohan 👋</h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        Front-End Developer specializing in <strong>React, Next.js</strong>, modern{" "}
        <strong>UI/UX</strong>, and <strong>Rich Media Ads</strong>. I build fast, accessible, and
        delightful web apps.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/projects" className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700">
          View Projects
        </Link>
        <a href="/MohanKumar_React_TypeScript.pdf" className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50">
          Download Resume
        </a>
      </div>
    </section>
  );
}
