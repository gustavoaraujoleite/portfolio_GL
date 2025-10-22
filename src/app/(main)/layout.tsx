import { MAX_CONTENT_WIDTH } from "./utils/globalStyle";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

type Props = {
  children: ReactNode;
};
export default function AppLayout({ children }: Props) {
  return (
    <section className="w-full h-screen">
      <Header />
      <div className="w-full flex justify-center pt-8">
        <div className={`h-full w-full pl-6 ${MAX_CONTENT_WIDTH}`}>
          {children}
        </div>
      </div>
      <Footer backgroundColor="bg-regular-gray" />
    </section>
  );
}
