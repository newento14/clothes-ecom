import Image from "next/image";
import hero from "../../public/main-4x.png";

export default function Home() {
  return (
    <main className="flex bg-[#94221a]"
          style={{
            backgroundBlendMode: 'multiply',
            backgroundImage: 'url(/texture1.jpg)'
          }}
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-center h-full">
          <Image src={hero} alt={'hero'} className="max-h-[calc(100vh-80px)]" />
        </div>
        <div className="h-[500px]">

        </div>
      </div>
      <div className="flex flex-col w-full max-w-[851px] h-full border-l-[3px] border-black">
        <div className="flex flex-col h-full">
          <div className="h-[70%] border-b-[3px] border-black">

          </div>
          <div className="flex h-[30%]">
            <div className="w-[40%] border-r-[3px] border-black">

            </div>
            <div>

            </div>
          </div>
        </div>
        <div>

        </div>
      </div>

    </main>
  );
}
