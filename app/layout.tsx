import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Font: carregando com display: swap e usando variable corretamente
const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

// Metadata otimizada
export const metadata: Metadata = {
    title: "FAME - Faculdade Mineira de Educação EaD",
    description: "Pós-graduação a distância com qualidade, flexibilidade e preço acessível.",
    authors: [
        { name: "RJ Digital", url: "https://rjdigital.com.br" },
        { name: "Felipe Fernandes", url: "https://github.com/FelipeFernandes777" },
    ],
    keywords: [
        "Faculdade Mineira de Educação EaD",
        "FAME",
        "Faculdade EAD",
        "Pós-graduação EAD",
        "Educação a distância",
        "Cursos online",
        "Engenharia",
        "Administração",
    ],
    category: "education",
    generator: "Next.js",
    applicationName: "FAME EaD",
    creator: "RJ Digital",
    publisher: "Hostinger",
    referrer: "origin",
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/fame4.png",
        apple: "/fame4.png",
    },
    manifest: "/manifest.json",
    openGraph: {
        title: "FAME - Faculdade Mineira de Educação EaD",
        description: "Sua pós-graduação está aqui",
        url: "https://site.com.br",
        siteName: "FAME EaD",
        images: [
            {
                url: "/fame1.png",
                width: 800,
                height: 600,
                alt: "Logo da Faculdade",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    metadataBase: new URL("https://site.com.br"),
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className={poppins.variable}>
        <body className="antialiased bg-white text-black">
        {children}
        </body>
        </html>
    );
}
