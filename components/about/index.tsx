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
        Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
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
                src: "/about/students.jpg",
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
                src: "/about/group_students.jpg",
                alt: "Estudantes FAME",
            },
        },
        {
            cardAbsolute: {
                title: { title: "Certificação Reconhecida" },
                description: {
                    description:
                        "Ao concluir sua pós-graduação na FAME, você recebe um certificado com validade nacional e reconhecimento do MEC. Um diferencial no seu currículo que comprova sua qualificação e dedicação.",
                },
            },
            img: {
                src: "/about/certificated.jpg",
                alt: "Certificado de Conclusão",
            },
        },
        {
            cardAbsolute: {
                title: { title: "Educação a Distância de Qualidade" },
                description: {
                    description:
                        "A FAME alia tecnologia e didática para entregar uma experiência EAD eficiente e envolvente. Estude onde e quando quiser, com acesso a materiais atualizados e suporte constante dos tutores.",
                },
            },
            img: {
                src: "/about/online_learning.jpg",
                alt: "Aula online da FAME",
            },
        },
        {
            cardAbsolute: {
                title: { title: "Corpo Docente Especializado" },
                description: {
                    description:
                        "Nossos professores são mestres e doutores com ampla experiência acadêmica e de mercado. Você aprende com quem realmente entende e vive a prática profissional da área.",
                },
            },
            img: {
                src: "/about/teacher.jpg",
                alt: "Professor da FAME",
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