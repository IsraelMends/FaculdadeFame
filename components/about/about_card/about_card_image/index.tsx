import Image from "next/image";

export interface AboutCardImageProps {
    src: string;
    alt: string;
}

export function AboutCardImage({src, alt}: AboutCardImageProps) {
    return (
        <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
            <Image alt={alt} src={src} className="rounded-lg object-cover" fill priority/>
        </div>
    )
}