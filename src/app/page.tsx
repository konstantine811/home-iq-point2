import Header from "@/components/common/header";
import EightSection from "@/components/pages/home/eigth-section";
import ElevenSection from "@/components/pages/home/eleven-section";
import FifthSection from "@/components/pages/home/fifth-section";
import FourthSection from "@/components/pages/home/fourth-section";
import MainSection from "@/components/pages/home/main-section";
import NinthSection from "@/components/pages/home/ninth-section";
import SecondSection from "@/components/pages/home/second-section";
import SeventhSection from "@/components/pages/home/seventh-section";
import SixthSection from "@/components/pages/home/sixth-section";
import TenSection from "@/components/pages/home/ten-section";
import ThirdSection from "@/components/pages/home/third-section";
import TwelveSection from "@/components/pages/home/twelve-section";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col mb-8">
        <Header />
        <MainSection />
      </div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      <NinthSection />
      <TenSection />
      <ElevenSection />
      <TwelveSection />
    </>
  );
}
