import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/logo.png';

export default function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <div className=''>
        <Image src={logoImage} alt='logo' width={40} height={40} />
      </div>
      <span className='font-bold text-xl'>The Digital Architech</span>
    </Link>
  );
}
