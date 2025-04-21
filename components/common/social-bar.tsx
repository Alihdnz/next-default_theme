'use client'
import Link from 'next/link'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

type SocialBarProps = {
  className?: string;
}

export default function SocialBar({className}: SocialBarProps) {

    type SocialItem = {
        title: string;
        href: string;
        icon?: React.ReactNode; 
      };


      const menuItems: SocialItem[] = [
        { title: 'Instagram', href: '/instragram', icon: <FaInstagram/> },
        { title: 'Linkedin', href: '/linkedin', icon: <FaLinkedinIn /> },
        { title: 'Github', href: '/github', icon: <FaGithub/> },
      ];

    
  return (
    <nav className={className}>
        <ul className='flex gap-4 text-2xl'>
            {menuItems.map((item)=>(
                <li key={item.href}>
                    <Link href={item.href} title={item.title}>{item.icon}</Link>
                </li>
            ))}
        </ul>
    </nav>
  );
}
