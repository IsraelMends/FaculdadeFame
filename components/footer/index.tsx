"use client"

import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
            <div className="container mx-auto px-6">
                {/* Logo + Mensagem */}
                <div className="flex flex-col items-center">
                    <Image src="/fame1.png" alt="Logo" className="h-14 mb-3" width={56} height={56} />
                    <p className="text-center text-gray-400 max-w-md">
                        Educação de qualidade, inovação e flexibilidade para transformar o seu futuro.
                    </p>
                </div>

                {/* Informações de contato */}
                <div className="mt-8 grid gap-4 text-center sm:grid-cols-3">
                    <div>
                        <h4 className="font-semibold text-white mb-1">📍 Endereço</h4>
                        <p>Rua Exemplo, 123 - Belo Horizonte/MG</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">📞 Telefone</h4>
                        <p>(31) 99999-9999</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">📧 E-mail</h4>
                        <p>contato@seudominio.com</p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Faculdade FAME. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}