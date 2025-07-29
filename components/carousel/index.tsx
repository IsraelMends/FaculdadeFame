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
        { src: "/logo_faculeste.webp", alt: "Logo 1" },
        { src: "/logo_faculeste.webp", alt: "Logo 2" },
        { src: "/logo_faculeste.webp", alt: "Logo 3" },
        { src: "/logo_faculeste.webp", alt: "Logo 4" },
        { src: "/logo_faculeste.webp", alt: "Logo 5" },
        { src: "/logo_faculeste.webp", alt: "Logo 6" },
        { src: "/logo_faculeste.webp", alt: "Logo 6" },
        { src: "/logo_faculeste.webp", alt: "Logo 6" },
        { src: "/logo_faculeste.webp", alt: "Logo 6" },
        { src: "/logo_faculeste.webp", alt: "Logo 6" },
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
            <CarouselCardSectionContainer ref={emblaRef}>
                <div className="flex">
                    {slideImages.map((image, index) => (
                        <CarouselCard {...image} key={index}/>
                    ))}
                </div>
            </CarouselCardSectionContainer>
        </CarrouselContainer>
    );
}
