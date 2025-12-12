import { PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Hero() {
    const src = '/images/bruna1.jpeg';

    return (
        <section className=" funnel-sans-light relative w-full min-h-100 flex items-center justify-center overflow-hidden">
            {/* Static Background Image */}
            <div className="absolute inset-0">
                <Image src={src} alt="Hero background" fill className="object-cover bg-top" priority />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Text Content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="text-center md:text-left max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Bruna Marian Estética
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        Realçando sua beleza com segurança e ética
                    </p>
                    <a
                        href="https://wa.me/5519996761467"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-medium px-8 py-3 rounded-full shadow-md transition-colors"
                    >
                        <PhoneIcon className="h-5 w-5" />
                        Agende a sua Avaliação
                    </a>
                </div>
            </div>
        </section>
    );
}