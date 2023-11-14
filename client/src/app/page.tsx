import Image from "next/image";
import hero from "../../public/main-4x.png";
import arrival from "../../public/arrival.jpg";
import { ConvertToCurrency } from "@/utils/convertToCurrency";
import UnderLineText from "@/components/UnderLineText";
import { TfiArrowRight } from "react-icons/tfi";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#94221a] w-full h-full text-white"
          style={{
            backgroundBlendMode: "multiply",
            backgroundImage: "url(/texture3.jpg)"
          }}>
      <div className="flex border-b-[3px] border-black">
        <div className="flex justify-center items-center w-full">
          <Image src={hero} alt={"hero"} className="max-h-[calc(100vh-80px)]" />
        </div>
        <div className="flex flex-col justify-between w-full max-w-[750px] border-l-[3px] border-black">
          <div className="flex border-b-[3px] border-black h-[70%] px-12 py-16">
            <div className="flex flex-col justify-between items-start">
              <p>HOT SALES</p>
              <p className="font-serif text-5xl tracking-widest leading-relaxed">A RED DRESS WILL BRIGHTEN UP YOUR
                EVENING</p>
              <div className="flex justify-between w-full items-center">
                <div className="flex justify-between items-end gap-x-4">
                  <div className="text-3xl font-semibold">{ConvertToCurrency(195)}</div>
                  <div className="text-xl text-white/60 font-semibold line-through">{ConvertToCurrency(280)}</div>
                </div>
                <div className="underline hover:no-underline">
                  <UnderLineText color='##94221a' height={2}>
                    <p>BUY NOW</p>
                  </UnderLineText>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[30%]">
            <div className="flex justify-center items-center w-[50%] border-r-[3px] border-black">
              <div className="flex flex-col text-center gap-y-2">
                <p className="text-5xl font-normal">100K</p>
                <p className="text-xl text-white/60">Customers</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-center h-full items-start text-start flex-col gap-y-2 px-16">
                <p className="text-lg font-semibold">New collection</p>
                <p className="text-base text-white/60">The red dress was inspired by a love of fashion and a fear of
                  complacency. Our challenge was to create a dress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full h-fit bg-[#131313]">
        <div className="flex justify-between max-2xl:w-fit max-2xl:p-2 max-2xl:pr-[141px] p-8 pl-24 w-full pr-32 extra:pr-8 text-white/50">
          <div>
            <div className="flex flex-col justify-center gap-y-4">
              <p className="tracking-widest">NEW ARRIVAL</p>
              <p className="text-4xl tracking-widest leading-relaxed font-semibold text-white/80">NEW LORIAN EVENING
                DRESS DESIGN</p>
              <p className="leading-relaxed">We are discovering a new fashion style, buy from Lorian Store and become
                one of us</p>
            </div>
          </div>
          <div className="flex gap-x-6 w-fit">
            <Image src={arrival} alt={"arrival"} className="w-[250px] h-[250px]" />
            <div className="bg-[#090909] p-4 h-fit w-fit hover:bg-[#94221a]">
              <TfiArrowRight size={30} color={"white"} />
            </div>
          </div>
        </div>
        <div className="flex p-8 flex-col max-2xl:p-2 text-white/50 w-full max-w-[750px] border-l-[3px] border-black">
          <div className="flex justify-between items-start">
            <p className="tracking-widest">LATEST NEWS</p>
            <div className="bg-[#090909] p-4 h-fit w-fit hover:bg-[#94221a]">
              <TfiArrowRight size={30} color={"white"} />
            </div>
          </div>
          <p className="text-4xl -mt-7 tracking-widest leading-relaxed font-semibold text-white/80 mb-4 w-[70%]">OUR NEW
            DRESS COLLECTION</p>
          <p className="w-[50%] leading-relaxed">Conquer city tops in comfort with lorian dress collection</p>
        </div>
      </div>
    </main>
  );
}
