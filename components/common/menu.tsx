'use client';
import { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";

type MenuProps = {
  className?: string;
}

export default function Menu({ className }: MenuProps) {
  type MenuItem = {
    label: string;
    href: string;
  };

  const menuItems: MenuItem[] = [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contato' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={className}>
      {/* Menu para desktop */}
      <ul className='hidden md:flex justify-center gap-4 text-lg'>
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className='no-underline hover:underline'>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu hambúrguer para dispositivos móveis */}
      <div className='md:hidden flex justify-between items-center'>
        <button 
          onClick={toggleMenu} 
          className='text-2xl'>
          <RxHamburgerMenu/>
        </button>
        {/* Exibe o menu quando o estado `isMenuOpen` for verdadeiro */}
        {isMenuOpen && (
          <ul className='flex flex-col items-center gap-4 text-lg bg-black text-white p-4 absolute top-16 left-0 right-0'>
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className='no-underline hover:underline'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
