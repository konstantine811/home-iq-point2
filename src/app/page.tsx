import Header from "@/components/common/header";
import EightSection from "@/components/pages/home/eigth-section";
import FifthSection from "@/components/pages/home/fifth-section";
import FourthSection from "@/components/pages/home/fourth-section";
import MainSection from "@/components/pages/home/main-section";
import SecondSection from "@/components/pages/home/second-section";
import SeventhSection from "@/components/pages/home/seventh-section";
import SixthSection from "@/components/pages/home/sixth-section";
import ThirdSection from "@/components/pages/home/third-section";

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
    </>
  );
}
