import { ReactNode } from "react";
import Beams from "./components/Beams";
import Footer from "./components/Footer";

type Props ={
    children: ReactNode
}
export default function AppLayout({children}: Props) {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-full">
        <Beams
          beamWidth={1.5}
          beamHeight={23}
          beamNumber={50}
          lightColor="#ffffff"
          speed={5.5}
          noiseIntensity={3.55}
          scale={0.07}
          rotation={131}
        />
      </div>
      {children}
      <Footer backgroundColor="bg-regular-gray" />
    </section>
  );
}
