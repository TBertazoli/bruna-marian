
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
            <nav className="max-w-6xl mx-auto flex items-center justify-between py-3 px-8">

                {/* Logo */}
                <Link href="/" className="font-serif text-2xl text-gray-800">
                    <Image
                        alt="Bruna Marian Estética"
                        src="/images/BrunaMarianLogo.png"
                        width={120}
                        height={68}
                        priority
                        className="max-h-19 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 font-sans text-gray-700">
                    <li><Link href="#servicos">Procedimentos</Link></li>
                    <li><Link href="#sobre">Dr. Bruna</Link></li>
                    <li><Link href="#contato">Contato</Link></li>
                </ul>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-700"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t shadow-md px-6 py-4 font-sans space-y-4">
                    <Link href="/" onClick={() => setOpen(false)}>Início</Link><br />
                    <Link href="#servicos" onClick={() => setOpen(false)}>Procedimentos</Link><br />
                    <Link href="#sobre" onClick={() => setOpen(false)}>Sobre</Link><br />
                    <Link href="#contato" onClick={() => setOpen(false)}>Contato</Link>
                </div>
            )}
        </header>
    );
}
