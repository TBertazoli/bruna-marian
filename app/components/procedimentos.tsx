import Image from "next/image";

export default function Procedimentos() {
    const procedimentos = [
        {
            id: 1,
            title: "Tratamento para Microvasos (PEIM)",
            description:
                "O PEIM (Procedimento Estético Injetável para Microvasos) é uma técnica minimamente invasiva destinada ao tratamento de microvasos e telangiectasias, comuns nas pernas. Por meio da aplicação direta de substâncias esclerosantes nos pequenos vasos, o procedimento promove o fechamento dessas estruturas, melhorando significativamente o aspecto da pele. O PEIM é rápido, seguro e não requer afastamento das atividades diárias.",
            image: "/images/microvasos.jpg",
        },
        {
            id: 2,
            title: "Toxina Botulínica",
            description:
                "A toxina botulínica suaviza linhas de expressão e proporciona aparência mais descansada e harmoniosa. Além dos benefícios estéticos, ela também é aplicada em condições clínicas, como bruxismo, hiperidrose e enxaqueca crônica.",
            image: "/images/toxina-botulinica.jpg",
        },
        {
            id: 3,
            title: "Bioestimulador de Colágeno",
            description:
                "Os bioestimuladores de colágeno estimulam a produção natural de colágeno, promovendo firmeza e melhora gradual da textura da pele. São indicados para tratar flacidez, sulcos e proporcionam rejuvenescimento natural e duradouro.",
            image: "/images/bioestimulador.jpg",
        },
        {
            id: 4,
            title: "Preenchimento com Ácido Hialurônico",
            description:
                "O preenchimento com ácido hialurônico restaura volume, suaviza rugas e realça contornos faciais. Seguro e biocompatível, oferece hidratação imediata e resultados naturais em áreas como lábios, olheiras, mandíbula e queixo.",
            image: "/images/preenchimento.jpg",
        },
        {
            id: 5,
            title: "Tratamento Capilar",
            description:
                "O MMP Capilar utiliza microagulhas para entregar ativos diretamente no couro cabeludo, fortalecendo os folículos e estimulando o crescimento de fios mais densos e saudáveis. Ideal para queda capilar e enfraquecimento dos fios.",
            image: "/images/tratamento-capilar.jpg",
        },
    ];

    return (
        <section id="servicos" className="py-20 px-6 bg-[#f8f5f4]">
            <h2 className="font-serif text-4xl text-center mb-16 text-gray-800">
                Nossos Procedimentos
            </h2>

            <div className="max-w-6xl mx-auto space-y-16">
                {procedimentos.map((procedimento, index) => (
                    <div
                        key={procedimento.id}
                        className={`flex flex-col ${index % 2 === 0
                            ? "md:flex-row"
                            : "md:flex-row-reverse"
                            } gap-10 bg-white rounded-2xl shadow-md overflow-hidden`}
                    >
                        {/* Image */}
                        <div className="md:w-1/2 h-[240px] md:h-[320px] relative">
                            <Image
                                src={procedimento.image}
                                alt={procedimento.title + ' - ' + procedimento.description.substring(0, 60) + '...'}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-none"
                                priority={index === 0}
                            />
                        </div>

                        {/* Text */}
                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                            <h3 className="font-serif text-3xl text-gray-800 mb-4">
                                {procedimento.title}
                            </h3>
                            <p className="font-sans text-gray-600 leading-relaxed">
                                {procedimento.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
