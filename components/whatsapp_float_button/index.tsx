import Image from "next/image";

export function WhatsAppFloatButton(){
    return (
        <div className="h-20 w-20 rounded-full absolute right-3 bottom-2 cursor-pointer overflow-hidden">
            <Image alt={"Icone do whatsapp"} src={"whatsapp_logo.svg"} fill className="object-cover"/>
        </div>
    )
}