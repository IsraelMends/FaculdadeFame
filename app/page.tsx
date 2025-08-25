import {Header} from "@/components/header";
import {Banner} from "@/components/banner";
import {Carousel} from "@/components/carousel";
import {WhatsAppFloatButton} from "@/components/whatsapp_float_button";
import {About} from "@/components/about";
import {Footer} from "@/components/footer";
import {ContactForm} from "@/components/form";

export default function Home() {
    return (
        <div className="w-full flex flex-col min-h-screen h-auto">
            <Header/>
            <Banner/>
            <About/>
            <Carousel/>
            <ContactForm />
            <WhatsAppFloatButton/>
            <Footer />
        </div>
    );
}
