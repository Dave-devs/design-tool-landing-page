import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export const Footer =() => {
    return (
        <footer className='py-16'>
            <div className="">
                <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
                    <div>
                        <Image src='/logo.svg' alt='logo' width={100} height={100} className='w-auto h-full' />
                    </div>
                    <div>
                        <nav className='flex gap-6'>
                            {footerLinks.map((link) => (
                                <Link key={link.label} href={link.href} className='text-white/50 text-sm '>{link.label}</Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
