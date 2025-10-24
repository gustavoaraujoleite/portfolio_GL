import Image from "next/image";
import LogoSmall from "../../../../../../public/icons/logo_small.svg";

export default function Loading() {
  return (
    <div
      data-testid="loading-container"
      className="absolute w-screen h-screen bg-regular-gray flex justify-center items-center"
    >
      <div
        data-testid="loading-icon"
        className="relative h-[160px] w-[160px] animate-bounce"
      >
        <Image
          src={LogoSmall}
          alt="loader icon"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
