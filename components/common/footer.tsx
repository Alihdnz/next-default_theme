"use client"
import Form from 'next/form'
import Link from 'next/link';
import Logo from './logo';

type FooterProps = {
    className?: string;
}
export default function Footer({className}: FooterProps) {

    const computedClass = `${className} py-24 flex justify-center`;
  return (
    <footer className={computedClass}>
        <div className='w-5/6'>
            <div className='flex justify-between items-center border-b-1 border-white pb-20 mb-20'>
                <div className='w-3/6 flex flex-col gap-4'>
                    <h3 className='text-5xl font-black uppercase' >Lorem ipsun amet</h3>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                </div>
                <Form action="/newsletter" className='w-2/6 flex gap-2 h-full'>
                    <input name="newsletter" placeholder="Seu E-mail" className="w-4/6 border-slate-100 border-1 p-6 bg-slate-100 text-black  transition duration-200 ease-in-out focus:bg-white"/>
                    <button type="submit" className='w-2/6 bg-transparent text-xl text-slate-50 border-1 border-slate-50 rounded-full p-6 cursor-pointer transition duration-200 ease-in-out hover:bg-white hover:text-black'>Cadastre-se</button>
                </Form>
            </div>

            <div className='flex justify-between'>
                <div>
                    <h4 className='text-4xl font-black uppercase mb-6'>Contato</h4>
                    <div className='flex flex-col gap-2'>
                        <Link href="mailto" title='email' className='no-underline hover:underline'>email@gmail.com</Link>
                        <Link href="callto" title='telefone' className='no-underline hover:underline'>(15) 9xxxx-xxxx</Link>
                    </div>
                </div>

                <div className='h-full'>
                    <Logo dataColor='invert'></Logo>
                </div>
            </div>
        </div>
    </footer>
  );
}
