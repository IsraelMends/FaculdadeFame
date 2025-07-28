import {ReactNode} from "react";

export function AboutInfoContainer({children}: {children: ReactNode}) {
    return (
        <div className="w-8/12 h-[600px] flex rounded-2xl">
            {children}
        </div>
    )
}