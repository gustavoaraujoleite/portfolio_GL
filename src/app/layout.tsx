import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Beams from "./(main)/components/Beams";

const inter = Inter({ subsets: ["latin"] });

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Gustavo Araujo Leite",
  description:
    "Gustavo Leite | Desenvolvedor de software focado em criar aplicações web e mobile com React, Next.js, Node.js e TypeScript. Soluções elegantes, funcionais e de alta performance. Experiência em plataformas educacionais e sites acessíveis. Transformando problemas complexos em experiências intuitivas e valiosas.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "gustavo leite, desenvolvedor de software, front-end, back-end, full stack, react, next.js, node.js, typescript, aplicações web, aplicações mobile, performance de software, código limpo, escalabilidade, experiência do usuário, UX, UI, acessibilidade, plataformas educacionais, soluções intuitivas, programação web, desenvolvimento web, desenvolvimento mobile, projetos de software, software eficiente, programador, computação, tecnologia, programação, transformação digital",
  authors: [{ name: "Gustavo Leite" }],
  robots: "index, follow",
  openGraph: {
    title: "Gustavo Araujo Leite",
    description:
      "Gustavo Leite | Desenvolvedor de software focado em criar aplicações web e mobile com React, Next.js, Node.js e TypeScript. Soluções elegantes, funcionais e de alta performance. Experiência em plataformas educacionais e sites acessíveis. Transformando problemas complexos em experiências intuitivas e valiosas.",
    type: "website",
    // images: [
    //   {
    //     url: "",
    //     alt: "Gustavo Araujo Leite",
    //   },
    // ],
  },
  // verification: {
  //   google: "",
  // },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable}`}>
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <Beams
              beamWidth={2}
              beamHeight={15}
              beamNumber={12}
              lightColor="#ffffff"
              speed={2}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={0}
            />
          </div>

          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
