'use client'

import { CarrouselContainer } from "@/components/carousel/carousel_container";
import { CarrouselTitle } from "@/components/carousel/carousel_title";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef } from "react";
import {CarouselCardSectionContainer} from "@/components/carousel/carousel_card_section_container";
import {CarouselCard} from "@/components/carousel/carousel_card";

export function Carousel() {
    const slideImages = [
        { src: "/logo_faculeste.webp", alt: "Logo 1", title: "Faculeste" },
        { src: "/logo_faculeste.webp", alt: "Logo 2", title: "EducaMinas" },
        { src: "/logo_faculeste.webp", alt: "Logo 3", title: "Facuvale" },
        { src: "/logo_faculeste.webp", alt: "Logo 4", title: "Educavale" },
        { src: "/logo_faculeste.webp", alt: "Logo 5", title: "Faculdade Iguaçu" },
    ];

    const autoplay = useRef(
        Autoplay({
            delay: 2000,
            playOnInit: true,
            stopOnInteraction: false,
            stopOnMouseEnter: false
        })
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [autoplay.current]
    );

    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <CarrouselContainer>
            <CarrouselTitle />
            <CarouselCardSectionContainer>
                <div className="flex w-full items-center justify-center">
                    {slideImages.map((props, index) => (
                        <CarouselCard {...props} key={index}/>
                    ))}
                </div>
            </CarouselCardSectionContainer>
        </CarrouselContainer>
    );
}
