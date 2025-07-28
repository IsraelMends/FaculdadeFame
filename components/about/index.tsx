"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import { AboutContainer } from "@/components/about/about_container";
import { AboutTile } from "@/components/about/about_title";
import { AboutDescription } from "@/components/about/about_description";
import { AboutInfoContainer } from "@/components/about/about_info_container";
import { AboutCard, AboutCardProps } from "@/components/about/about_card";

export function About() {

    const autoplay = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

    const aboutCards: AboutCardProps[] = [
        {
            cardAbsolute: {
                title: { title: "Nossos princípios" },
                description: {
                    description:
                        "Na FAME, excelência é mais do que um objetivo — é um compromisso. Com professores altamente qualificados, uma plataforma de ensino moderna e cursos voltados para o mercado de trabalho, nos consolidamos como a melhor faculdade de pós-graduação do Brasil. Aqui, você encontra flexibilidade, acessibilidade e qualidade para transformar sua carreira de verdade.",
                },
            },
            img: {
                src: "/banner/students.jpg",
                alt: "Campus",
            },
        },
        {
            cardAbsolute: {
                title: { title: "Excelência Acadêmica" },
                description: {
                    description:
                        "A FAME oferece cursos desenvolvidos por especialistas para preparar você para os desafios reais do mercado. Nossa metodologia é prática, inovadora e focada em resultados.",
                },
            },
            img: {
                src: "/banner/students.jpg",
                alt: "Estudantes FAME",
            },
        },
    ];
    return (
        <AboutContainer>
            <AboutTile title={"Sobre a FAME"}/>
            <AboutDescription
                description={"Somente quando diferentes valores, experiências e perspectivas são confrontados com um " +
                    "discurso livre e aberto, a educação pode ser verdadeiramente transformadora."}/>
            <AboutInfoContainer>
                <div className="overflow-hidden w-full" ref={emblaRef}>
                    <div className="flex">
                        {aboutCards.map((card, index) => (
                            <div
                                key={index}
                                className="min-w-full flex justify-center items-center px-4 py-8"
                            >
                                <div className="max-w-6xl w-full">
                                    <AboutCard {...card} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AboutInfoContainer>
            <div className="w-full flex items-center justify-center mt-4">
            </div>
        </AboutContainer>
    )
}