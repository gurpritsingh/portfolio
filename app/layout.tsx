import './globals.css';
import { Inter } from 'next/font/google';

import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gurprit Singh | web development',
  description: 'Full stack Web developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen`}>
        <div className="flex justify-center pt-20 w-full">
          <div className="max-w-4xl w-full border-r-muted flex flex-col">
            <Header />
            <div className="my-14 grow">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
