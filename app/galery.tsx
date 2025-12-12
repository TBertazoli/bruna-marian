import Image from "next/image";

export default function BeforeAfterGallery() {
    const items = [
        { before: "/images/before1.jpg", after: "/images/after1.jpg", alt: "Tratamento 1" },
        { before: "/images/before2.jpg", after: "/images/after2.jpg", alt: "Tratamento 2" },
        { before: "/images/before3.jpg", after: "/images/after3.jpg", alt: "Tratamento 3" }
    ];

    return (
        <section id="antes-depois" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
                    Antes & Depois
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl overflow-hidden shadow-md bg-gray-50 border border-gray-200"
                        >
                            <div className="relative w-full h-64">
                                <Image
                                    src={item.before}
                                    alt={item.alt + " antes"}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition duration-300"
                                />
                                <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                    Antes
                                </span>
                            </div>

                            <div className="relative w-full h-64 mt-1">
                                <Image
                                    src={item.after}
                                    alt={item.alt + " depois"}
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                    Depois
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}