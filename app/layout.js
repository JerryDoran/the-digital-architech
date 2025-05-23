import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata = {
  title: 'The Digital Architech',
  description: 'Web Development & Software Solutions for Small Businesses',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${manrope.variable} manrope-font`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
