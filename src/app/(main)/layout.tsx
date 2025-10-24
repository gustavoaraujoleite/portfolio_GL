import { MAX_CONTENT_WIDTH } from "./utils/globalStyle";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

type Props = {
  children: ReactNode;
};
export default function AppLayout({ children }: Props) {
  return (
    <div className="relative w-full bg-[#000000] min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#ffffff1c] to-[#000000] opacity-60 animate-wave blur-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#ffffff1c] to-[#000000] opacity-50 animate-wave-slow blur-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#ffffff1c] to-[#000000] opacity-20 animate-wave-fast blur-lg"></div>

      <div className="relative z-10 w-full">
        <Header />
        <div className="w-full flex justify-center pt-8">
          <div className={`w-full pl-6 ${MAX_CONTENT_WIDTH}`}>{children}</div>
        </div>
        <Footer backgroundColor="bg-regular-gray" />
      </div>
    </div>
  );
}
