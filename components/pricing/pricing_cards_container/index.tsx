import { ReactNode } from "react";

export function PricingCardsContainer({ children }: { children: ReactNode }) {
    return (
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 px-2 md:px-0">
            {children}
        </div>
    );
}
