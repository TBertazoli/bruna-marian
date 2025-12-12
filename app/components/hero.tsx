export default function Hero() {
    return (
        <section className="relative bg-[#f8f5f4] py-24 px-6 overflow-hidden">

            {/* Decorative soft gradient / glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto text-center relative z-10 mt-6">

                {/* Title */}
                <h1 className="font-serif text-5xl md:text-6xl text-gray-800 leading-tight">
                    Realçando Sua <br />
                    <span className="text-rose-300">Beleza Natural</span>
                </h1>

                {/* Subtitle */}
                <p className="font-sans text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                    Procedimentos estéticos modernos, seguros e personalizados para
                    ressaltar sua melhor versão com naturalidade e elegância.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex justify-center gap-4">
                    <a
                        href="#servicos"
                        className="px-8 py-3 rounded-full bg-rose-300 text-white font-sans text-lg shadow-md hover:bg-rose-400 transition-all"
                    >
                        Conheça os Procedimentos
                    </a>

                    <a
                        href="https://wa.me/5519996761467"
                        target="_blank"
                        className="px-8 py-3 rounded-full border border-rose-300 text-rose-300 font-sans text-lg hover:bg-rose-50 transition-all"
                    >
                        Agendar Consulta
                    </a>
                </div>
            </div>

            {/* Optional Hero Image
            <div className="absolute bottom-0 right-0 w-[350px] md:w-[480px] opacity-20 md:opacity-30 pointer-events-none select-none">
                <img src="/images/bruna1.jpeg" alt="Aesthetic" className="w-full h-full object-cover" />
            </div> */}
        </section>
    );
}
