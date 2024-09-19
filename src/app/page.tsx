import Header from "@/components/common/header";
import MainSection from "@/components/pages/home/main-section";
import SecondSection from "@/components/pages/home/second-section";
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
    </>
  );
}
