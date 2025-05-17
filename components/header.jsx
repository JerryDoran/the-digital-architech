import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import Logo from '@/components/logo';

export default function Header() {
  return (
    <header className='w-full p-4 flex items-center justify-between'>
      <Logo />
      <nav className='flex items-center gap-4 w-max border border-gray-700 rounded-full py-2 px-6 fixed top-4 right-1/2 translate-x-1/2 backdrop-blur-sm bg-white/10'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
      <div className=''>
        <a href='/' target='_blank'>
          <FaFacebook
            size={24}
            className='hover:text-[#a1c0ea] transition-colors ease'
          />
        </a>
      </div>
    </header>
  );
}
