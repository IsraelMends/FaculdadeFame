import { PricingContainer } from "@/components/pricing/pricing_container";
import { PricingTitle } from "@/components/pricing/pricing_title";
import { PricingDescription } from "@/components/pricing/pricing_description";
import { PricingCardsContainer } from "@/components/pricing/pricing_cards_container";
import { PricingCard, PricingCardProps } from "@/components/pricing/pricing_card";

export function Pricing() {
    const pricingCards: PricingCardProps[] = [
        {
            courses: 1,
            price: "R$ 1.999,90",
            installment: "12X R$ 166,67",
        },
        {
            courses: 2,
            price: "R$ 3.499,90",
            installment: "12X R$ 291,67",
        },
        {
            courses: 3,
            price: "R$ 4.999,90",
            installment: "12X R$ 416,67",
        },
        {
            courses: 4,
            price: "R$ 5.999,90",
            installment: "12X R$ 500,00",
        },
        {
            courses: 5,
            price: "R$ 7.999,90",
            installment: "12X R$ 666,67",
        },
    ];

    return (
        <PricingContainer>
            <PricingTitle title="Valores dos Cursos Técnicos por Competência" />
            <PricingDescription description="Escolha o plano que melhor se adequa ao seu desenvolvimento profissional. Quanto mais cursos, maior o desconto." />
            <PricingCardsContainer>
                {pricingCards.map((card, index) => (
                    <PricingCard key={index} {...card} />
                ))}
            </PricingCardsContainer>
        </PricingContainer>
    );
}
