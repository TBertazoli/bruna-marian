import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#f8f5f4] py-12 px-6 mt-20 border-t border-rose-100" id="contato">
            <div className="max-w-6xl mx-auto text-center">

                {/* Logo */}
                <h2 className="font-serif text-3xl text-gray-800 mb-6">
                    Bruna Marian Estética
                </h2>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mb-8">
                    <Link href="https://www.instagram.com/bruna_marian_hof/" target="_blank">
                        <img src="/images/instagram.png" alt="Instagram" className="w-7 h-7 opacity-80 hover:opacity-100 transition" />
                    </Link>

                    <Link href="https://wa.me/5519996761467" target="_blank">
                        <img src="/images/whatsapp.png" alt="WhatsApp" className="w-7 h-7 opacity-80 hover:opacity-100 transition" />
                    </Link>
                </div>

                {/* Copyright */}
                <p className="font-sans text-gray-600 text-sm">
                    © {new Date().getFullYear()} Bruna Marian Estética — Todos os direitos reservados.
                </p>
                <div className="font-sans text-gray-600 text-sm">
                    <span className="hidden md:inline">Campinas, SP •</span> Atendimento em Campinas e Região
                </div>
                <div className="font-sans text-gray-500 text-xs mt-2">
                    Desenvolvido por <a href="https://cre8ivedevs.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-rose-500">Cre8ive Devs</a>
                </div>
            </div>
        </footer>
    );
}
