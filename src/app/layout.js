import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from './providers';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBox';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is a movie database clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
