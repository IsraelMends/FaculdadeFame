import {Header} from "@/components/header";
import {Banner} from "@/components/banner";
import {Carousel} from "@/components/carousel";

export default function Home() {
  return (
          <div className="w-screen min-h-screen bg-white overflow-hidden max-w-screen">
            <Header />
            <Banner />
            <Carousel />
          </div>
  );
}
