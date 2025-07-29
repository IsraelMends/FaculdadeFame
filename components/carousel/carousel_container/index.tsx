import {ReactNode} from "react";

export function CarrouselContainer({children}: {children: ReactNode}) {
    return (
        <div className="w-screen h-80 max-w-screen flex items-center justify-evenly flex-col bg-[#2fddc0]/15">
            {children}
        </div>
    )
}