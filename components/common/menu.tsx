'use client'
import Link from 'next/link'

type MenuProps = {
  className?: string;
}

export default function Menu({className}: MenuProps) {

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

    
  return (
    <nav className={className}>
        <ul className='flex justify-center gap-4 text-lg'>
            {menuItems.map((item)=>(
                <li key={item.href}>
                    <Link href={item.href} className='no-underline hover:underline'>{item.label}</Link>
                </li>
            ))}
        </ul>
    </nav>
  );
}
