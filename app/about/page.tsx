export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4 text-gray-700">
        I’m Mohan, a Front-End Developer with hands-on experience in HTML5, CSS3, JavaScript,
        React.js, Next.js, and UI/UX. I also enjoy video editing and creating engaging visuals
        for product storytelling.
      </p>

      <h3 className="mt-8 text-2xl font-semibold">Skills</h3>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <li className="rounded-md bg-blue-100 px-4 py-2">React.js</li>
        <li className="rounded-md bg-blue-100 px-4 py-2">Next.js</li>
        <li className="rounded-md bg-blue-100 px-4 py-2">JavaScript (ES6+)</li>
        <li className="rounded-md bg-blue-100 px-4 py-2">HTML5 / CSS3</li>
        <li className="rounded-md bg-blue-100 px-4 py-2">Tailwind CSS</li>
        <li className="rounded-md bg-blue-100 px-4 py-2">UI/UX Design</li>
        <li className="rounded-md bg-blue-100 px-4 py-2">Video Editing</li>
      </ul>
    </section>
  );
}
