import './globals.css'
import { Inter } from 'next/font/google'
import Link  from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test app',
  description: 'Application Test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-center m-5">
          <Link className="p-5" href="/">
            Home
          </Link>
          <Link className="p-5" href="/about">
            About us
          </Link>
          <Link className="p-5" href="/lazydemo">
            Lazy Demo
          </Link>
        </nav>
        <div className="flex h-[100vh] justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
