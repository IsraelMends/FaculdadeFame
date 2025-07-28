import {ReactNode} from "react";

export function AboutCardAbsoluteContainer({children}: { children: ReactNode }) {
    return (
        <div
            className="absolute top-1/2 right-[-150px] transform -translate-y-1/2 translate-x-1/4 bg-green-50 p-6
            md:p-10 rounded-lg shadow-lg w-full sm:w-[400px] max-w-full h-8/12  flex flex-col">
            {children}
        </div>
    )
}