export interface PricingCardProps {
    courses: number;
    price: string;
    installment: string;
}

export function PricingCard({ courses, price, installment }: PricingCardProps) {
    return (
        <div className="flex flex-col items-center justify-center p-6 md:p-8 border-2 border-gray-200 rounded-2xl hover:border-emerald-500 hover:shadow-lg transition-all duration-300 bg-white">
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {courses} {courses === 1 ? "Curso" : "Cursos"}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                {price}
            </div>
            <div className="text-gray-600 text-center text-sm md:text-base">
                {installment}
            </div>
        </div>
    );
}
