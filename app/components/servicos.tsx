export default function Servicos() {
    const services = [
        {
            id: 1,
            title: "Tratamento para Microvasos (PEIM)",
            description: "O PEIM (Procedimento Estético Injetável para Microvasos) é uma técnica minimamente invasiva destinada ao tratamento de microvasos e telangiectasias, comuns nas pernas. Por meio da aplicação direta de substâncias esclerosantes nos pequenos vasos, o procedimento promove o fechamento gradual dessas estruturas, melhorando significativamente o aspecto da pele. O PEIM é rápido, seguro e não requer afastamento das atividades diárias, sendo uma alternativa eficaz para quem busca resultados estéticos visíveis com conforto e precisão.",
            image: "/images/microvasos.jpg"
        },
        {
            id: 2,
            title: "Toxina Botulínica",
            description: "A toxina botulínica é um agente amplamente utilizado na medicina estética e terapêutica, reconhecido por sua capacidade de suavizar linhas de expressão e proporcionar aparência mais descansada e harmoniosa. Além dos benefícios estéticos, a toxina botulínica também é aplicada em diversas condições clínicas, como bruxismo, hiperidrose e enxaqueca crônica.",
            image: "/images/toxina-botulinica.jpg"
        },
        {
            id: 3,
            title: "Bioestimulador de Colágeno",
            description: "Os bioestimuladores de colágeno são substâncias injetáveis que estimulam a produção natural de colágeno pelo organismo, promovendo firmeza, elasticidade e melhora gradual da textura da pele. Indicados para tratar flacidez e sulcos, eles oferecem resultados progressivos e duradouros, mantendo a naturalidade da expressão. O procedimento é minimamente invasivo, seguro e personalizado de acordo com as necessidades de cada paciente, contribuindo para um rejuvenescimento equilibrado e harmonioso.",
            image: "/images/bioestimulador.jpg"
        },
        {
            id: 4,
            title: "Preenchimento com Ácido Hialurônico",
            description: "O preenchimento com ácido hialurônico é um procedimento minimamente invasivo que restaura volume, suaviza rugas e realça contornos faciais de forma natural. Biocompatível e seguro, o ácido hialurônico integra-se aos tecidos, proporcionando hidratação e sustentação imediatas. Indicado para áreas como lábios, olheiras, mandíbula, queixo e sulcos faciais, o tratamento é personalizado conforme as necessidades de cada paciente, garantindo resultados harmoniosos, duradouros e com rápida recuperação.",
            image: "/images/preenchimento.jpg"
        },
        {
            id: 5,
            title: "Tratamento Capilar",
            description: "O MMP Capilar (Microinfusão de Medicamentos na Pele) é um tratamento moderno que utiliza microagulhas para entregar ativos diretamente no couro cabeludo, favorecendo a absorção e potencializando os resultados. Essa técnica estimula a circulação local, fortalece os folículos e promove o crescimento de fios mais densos e saudáveis. Indicado para casos de queda capilar, afinamento e enfraquecimento dos fios, o MMP é um procedimento seguro, preciso e personalizado conforme as necessidades de cada paciente.",
            image: "/images/tratamento-capilar.jpg"
        }
    ];

    return (
        <section className="py-16 px-4" id="servicos">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
            <div className="max-w-6xl mx-auto space-y-8">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            } gap-6 bg-white rounded-lg shadow-lg overflow-hidden`}
                    >
                        <div className="md:w-1/2">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}