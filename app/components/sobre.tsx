export default function Sobre() {
    return (
        <section className="py-16 px-4 bg-gray-50" id="sobre">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <div className="relative rounded-lg overflow-hidden">
                        <img
                            src="/images/sobre.jpeg"
                            alt="Bruna Marian Estética"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-6">Dra. Bruna Marian - CRBMSP 70661</h2>
                        <p className="text-gray-700 mb-4">
                            Com formação em Biomedicina e especialização em Biomedicina Estética, Dra. Bruna Marian atua com excelência na área de Harmonização Facial e Tricologia, unindo conhecimento científico, técnica avançada e olhar estético apurado. Sua prática é guiada por princípios de segurança, naturalidade e individualidade, oferecendo tratamentos personalizados que valorizam a beleza única de cada paciente.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Como especialista em Harmonização Facial, domina protocolos modernos minimamente invasivos, focados em realçar proporções, restaurar volume, prevenir o envelhecimento e promover equilíbrio facial. Na área de Tricologia, realiza avaliações completas do couro cabeludo e fios, além de tratamentos voltados para queda capilar, fortalecimento, revitalização e saúde capilar global.
                        </p>
                        <p className="text-gray-700">
                            Com atendimento humanizado e constante atualização profissional, entrega resultados de alta qualidade, sempre priorizando bem-estar, autoestima e a melhor experiência para seus pacientes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}




