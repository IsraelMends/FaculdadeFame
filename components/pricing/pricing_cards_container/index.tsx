import { ReactNode } from "react";

interface PricingCardsContainerProps {
    children: ReactNode;
}

export function PricingCardsContainer({ children }: PricingCardsContainerProps) {
    const childrenArray = Array.isArray(children) ? children : [children];
    const topCards = childrenArray.slice(0, 3);
    const bottomCards = childrenArray.slice(3, 5);

    return (
        <div className="w-full flex flex-col items-center px-2 md:px-0">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                {topCards}
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:max-w-2xl mx-auto">
                {bottomCards}
            </div>
        </div>
    );
}
