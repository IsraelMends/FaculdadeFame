import Image from "next/image";

export function WhatsAppFloatButton(){
    return (
        <div className="h-16 w-16 rounded-full right-3 bottom-2 cursor-pointer overflow-hidden fixed">
            <Image alt={"Icone do whatsapp"} src={"whatsapp_logo.svg"} fill className="object-cover"/>
        </div>
    )
}