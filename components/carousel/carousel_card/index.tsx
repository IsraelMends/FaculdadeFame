import {CarouselCardContainer} from "@/components/carousel/carousel_card/carousel_card_container";
import Image from "next/image";

interface CarouselCardProps {
    alt: string
    src: string
}

export function CarouselCard(image: CarouselCardProps) {
    return (
        <CarouselCardContainer>
            <div className="w-full h-full relative">
                <Image
                    alt={image.alt}
                    src={image.src}
                    fill
                    className="object-cover"
                    sizes="144px"
                />
            </div>
        </CarouselCardContainer>
    )
}