import {ReactNode} from "react";

export function AboutContainer({children}: {children: ReactNode}) {
    return (
        <div className="w-full flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
            {children}
        </div>
    )
}