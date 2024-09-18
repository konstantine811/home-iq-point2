import Header from "@/components/common/header";
import MainSection from "@/components/pages/home/main-section";
import SecondSection from "@/components/pages/home/second-section";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        <Header />
        <MainSection />
      </div>
      <SecondSection />
    </>
  );
}
