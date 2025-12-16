import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
});

export function WhatsAppButton() {
  return (

    <Link href="https://wa.me/5519996761467" target="_blank"
      className="fixed bottom-6 right-6 z-50 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition"
    >
      <img src="/images/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
    </Link>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://brunamarian.com.br"),
  title: "Bruna Marian Estética | Harmonização Facial e Tratamento Capilar em Campinas",
  description: "Dra. Bruna Marian, especialista em Biomedicina Estética, oferece procedimentos modernos e personalizados de harmonização facial, tratamento capilar e cuidados avançados em Campinas. Realce sua beleza natural com segurança e excelência.",
  keywords: [
    "Bruna Marian",
    "Estética Campinas",
    "Harmonização Facial",
    "Biomedicina Estética",
    "Procedimentos Estéticos",
    "Campinas",
    "Cuidados com a pele",
    "Tratamento capilar",
    "Botox",
    "Preenchimento Facial",
    "Peelings",
    "Microagulhamento",
    "Rejuvenescimento Facial",
    "Tratamento para Microvasos (PEIM)",
    "Toxina Botulínica",
    "Bioestimulador de Colágeno",
    "Preenchimento com Ácido Hialurônico",
    "Campinas e Região",
    "Sousas"
  ],
  openGraph: {
    title: "Bruna Marian Estética | Harmonização Facial e Tratamento Capilar em Campinas",
    description: "Dra. Bruna Marian, especialista em Biomedicina Estética, oferece procedimentos modernos e personalizados de harmonização facial, tratamento capilar e cuidados avançados em Campinas.",
    images: [
      {
        url: "/images/BrunaMarianLogo.png",
        width: 1200,
        height: 630,
        alt: "Bruna Marian Estética logo"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" >
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html >
  );
}
