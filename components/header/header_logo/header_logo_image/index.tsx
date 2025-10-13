import Image from "next/image";

export function HeaderLogoImage() {
    return (
        <Image
            src="/header_logo.png"
            alt="Logo"
            width={480}
            height={144}
            priority
            sizes="(max-width: 768px) 160px, (max-width: 1280px) 280px, 320px"
            className="h-10 w-auto md:h-16 lg:h-20 xl:h-24"
        />
    );
}