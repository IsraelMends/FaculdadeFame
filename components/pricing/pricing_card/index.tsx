"use client";

import { useState } from "react";

export interface PricingCardProps {
    courses: number;
    price: string;
    installment: string;
    isPopular?: boolean;
}

export function PricingCard({ courses, price, installment, isPopular = false }: PricingCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative flex flex-col h-full transition-all duration-500 ease-out transform ${
                isPopular ? "md:scale-105" : ""
            } ${isHovered ? "scale-105 md:scale-110" : "scale-100"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Popular Badge */}
            {isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">
                        Mais Popular
                    </div>
                </div>
            )}

            {/* Card Body */}
            <div
                className={`flex flex-col h-full p-6 md:p-8 rounded-3xl transition-all duration-500 ${
                    isPopular
                        ? "bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-300 shadow-2xl"
                        : "bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-lg"
                } ${isHovered ? "shadow-2xl" : ""}`}
            >
                {/* Courses Header */}
                <div className="mb-8">
                    <div className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                        isPopular ? "text-emerald-700" : "text-gray-600"
                    }`}>
                        Pacote de
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold transition-all duration-300 ${
                        isPopular
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600"
                            : "text-gray-900"
                    }`}>
                        {courses} {courses === 1 ? "Curso" : "Cursos"}
                    </div>
                </div>

                {/* Installment Price - Main Focus */}
                <div className="flex-grow flex flex-col justify-center items-center">
                    <div className="text-sm text-gray-500 mb-3 font-medium">VALOR PARCELADO</div>
                    <div className={`text-5xl md:text-6xl font-bold transition-all duration-300 ${
                        isPopular
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600"
                            : "text-emerald-600"
                    }`}>
                        {installment}
                    </div>
                </div>

                {/* Total Price - Smaller */}
                <div className="mt-8 text-center border-t-2 border-gray-200 pt-4">
                    <div className="text-xs text-gray-500 mb-1">Valor total</div>
                    <div className={`text-lg md:text-xl font-semibold ${
                        isPopular ? "text-emerald-600" : "text-gray-700"
                    }`}>
                        {price}
                    </div>
                </div>
            </div>
        </div>
    );
}
