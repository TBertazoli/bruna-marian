import { PhoneIcon } from '@heroicons/react/24/outline';

export default function Sobre() {
    return (
        <section className="py-12 funnel-sans-light" id="sobre">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-3xl font-semibold mb-4 text-gray-900">Dra. Bruna Marian - CRBMSP 70661</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <div className="overflow-hidden border-2 border-gray-200">
                            <img
                                src="/images/sobre.jpeg"
                                alt="Bruna Marian procedimento"
                                className="w-full h-full object-cover md:h-[680px]"
                            />
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto">


                        <p className="text-gray-700 mb-4 leading-relaxed text-justify">Com formação em Biomedicina e especialização em Biomedicina Estética, Dra. Bruna Marian atua com excelência na área de Harmonização Facial e Tricologia, unindo conhecimento científico, técnica avançada e olhar estético apurado. Sua prática é guiada por princípios de segurança, naturalidade e individualidade, oferecendo tratamentos personalizados que valorizam a beleza única de cada paciente.</p>

                        <p className="text-gray-700 mb-4 leading-relaxed text-justify">Como especialista em Harmonização Facial, domina protocolos modernos minimamente invasivos, focados em realçar proporções, restaurar volume, prevenir o envelhecimento e promover equilíbrio facial. Na área de Tricologia, realiza avaliações completas do couro cabeludo e fios, além de tratamentos voltados para queda capilar, fortalecimento, revitalização e saúde capilar global.</p>

                        <p className="text-gray-700 mb-6 leading-relaxed text-justify">Com atendimento humanizado e constante atualização profissional, entrega resultados de alta qualidade, sempre priorizando bem-estar, autoestima e a melhor experiência para seus pacientes.</p>
                        <a
                            href="https://wa.me/5519996761467"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-medium px-8 py-3 rounded-full shadow-md transition-colors"
                        >
                            <PhoneIcon className="h-5 w-5" />
                            Agende a sua Avaliação
                        </a>

                        <p className="text-xs text-gray-400 mt-4">CRBM-SP 70661 • Resultados com segurança e ética</p>
                    </div>
                </div>
            </div>
        </section>
    );
}




