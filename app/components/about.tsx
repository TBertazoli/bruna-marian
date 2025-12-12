import { PhoneIcon } from '@heroicons/react/24/outline';

export default function About() {
    return (
        <section id="sobre" className="py-20 bg-[#f8f5f4]">
            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <h2 className="font-serif text-4xl text-gray-800 mb-10 text-center">
                    Dra. Bruna Marian <span className="text-rose-300">•</span> CRBM-SP 70661
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <div className="w-full">
                        <div className="overflow-hidden rounded-3xl shadow-lg">
                            <img
                                src="/images/sobre.jpeg"
                                alt="Dra. Bruna Marian"
                                className="w-full h-full object-cover md:h-[650px]"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="max-w-xl">
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Com formação em Biomedicina e especialização em Biomedicina Estética,
                            <strong> Dra. Bruna Marian </strong> atua com excelência nas áreas de
                            Harmonização Facial e Tricologia, unindo conhecimento científico, técnica
                            avançada e um olhar estético refinado.
                        </p>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Seus atendimentos são guiados por princípios de segurança, naturalidade e
                            individualidade — oferecendo tratamentos personalizados que valorizam a
                            beleza única de cada paciente.
                        </p>

                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Especialista em procedimentos minimamente invasivos, domina protocolos de
                            rejuvenescimento, restauração de volume, equilíbrio facial e terapias
                            avançadas para saúde capilar, sempre priorizando bem-estar, autoestima e
                            resultados harmoniosos.
                        </p>

                        {/* CTA Button */}
                        <a
                            href="https://wa.me/5519996761467"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-rose-300 hover:bg-rose-400 text-white font-medium px-8 py-3 rounded-full shadow-md transition-all"
                        >
                            <PhoneIcon className="h-5 w-5" />
                            Agende a sua Avaliação
                        </a>

                        <p className="text-xs text-gray-500 mt-4">
                            CRBM-SP 70661 • Resultados com segurança, ética e excelência
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
