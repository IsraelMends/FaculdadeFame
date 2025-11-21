import { ReactNode } from "react";

export function PricingCardsContainer({ children }: { children: ReactNode }) {
    return (
        <div className="w-full max-w-6xl flex flex-col items-center px-2 md:px-0">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                {Array.from(children as any).slice(0, 3)}
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:max-w-2xl mx-auto">
                {Array.from(children as any).slice(3, 5)}
            </div>
        </div>
    );
}
