import {ReactNode} from "react";

export function CarouselCardContainer({ children }: { children:ReactNode }) {
    return (
        <div className="flex-[0_0_auto] mr-4 shadow-lg w-36 h-36 flex flex-col items-center justify-between rounded-lg overflow-hidden">{children}</div>
    )
}