"use client"
import Container from './Container'
import Logo from '../Logo'
import Navbar, { links } from '../Navbar'
import Link from 'next/link'
import { LinkI } from '@/types'

const Footer = () => {

    const involvmentLinks: LinkI[] = [
        { label: "For Farmers", link: "" },
        { label: "For Partners", link: "" },
        { label: "Careers", link: "" },
        { label: "Contact Us", link: "" },
    ]

    const contactLinks: LinkI[] = [
        { label: "Head Office: Kampala, Uganda", link: "" },
        { label: "Pilot Hub: West Nile, Arua District", link: "" },
        { label: "+256 XXX XXX XXX", link: "" },
    ]

    return (
        <div className='bg-dark py-[6rem]'>
            <Container>
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Logo Section */}
                    <div className="flex-1">
                        <Logo mode='light' />
                        <p className='mt-4'>Building Africa's first tech-driven native tree seed system for lasting biodiversity restoration.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex-1">
                        <div className="text-xl font-bold">Quick Links</div>
                        {links?.map((l, i) => (
                            <Link key={i} className='text-white mt-4 block' href={l.link}>{l.label}</Link>
                        ))}
                    </div>

                    {/* Get Involved */}
                    <div className="flex-1">
                        <div className="text-xl font-bold">Get Involved</div>
                        {involvmentLinks?.map((l, i) => (
                            <Link key={i} className='text-white mt-4 block' href={l.link}>{l.label}</Link>
                        ))}
                    </div>

                    {/* Contact Us */}
                    <div className="flex-1">
                        <div className="text-xl font-bold">Contact Us</div>
                        {contactLinks?.map((l, i) => (
                            <Link key={i} className='text-white mt-4 block' href={l.link}>{l.label}</Link>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
