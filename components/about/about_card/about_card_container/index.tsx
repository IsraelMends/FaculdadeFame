import {ReactNode} from "react";

export function AboutInfoContainer({children}: {children: ReactNode}) {
    return (
        <div className="relative w-9/12 max-w-5xl overflow-visible">{children}</div>
    )
}