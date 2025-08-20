import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Hi, I’m Mohan 👋
        </h1>

        <h2 className="mt-4 max-w-2xl text-lg italic text-gray-600 dark:text-gray-300">
          Building interactive, scalable, and pixel-perfect front-end solutions.
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Front-End Developer specializing in <strong>React, Next.js</strong>, modern{" "}
          <strong>UI/UX</strong>, and <strong>Rich Media Ads</strong>. I build fast,
          accessible, and delightful web apps.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/MohanKumar_React_TypeScript.pdf"
            target="_blank"
            className="rounded-lg border border-blue-600 dark:border-blue-400 px-6 py-3 font-semibold 
                       text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800"
          >
            Download Resume
          </a>
        </div>

        <br />
        <Projects />
      </section>

      <Contact />
    </main>
  );
}
