import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohan's Portfolio",
  description: "Front-End Developer Portfolio built with Next.js & Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:text-white`}>
        {/* Theme Provider ensures theme sync */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-xl font-bold">Mohan's Portfolio</h1>
            <ThemeToggle />
          </header>

          <main>{children}</main>

          <footer className="mt-12 border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mohan Kumar. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
