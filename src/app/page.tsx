import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import EightSGoogleReviews from "@/components/pages/home/eigth-s-google-reviews";
import EleventhSFinishedWork from "@/components/pages/home/eleventh-s-finished-work";
import FifthSection from "@/components/pages/home/fifth-section";
import FourthSection from "@/components/pages/home/fourth-section";
import MainSection from "@/components/pages/home/main-section";
import NinthSEmailSend from "@/components/pages/home/ninth-s-email-send";
import SecondSection from "@/components/pages/home/second-section";
import SeventhSHowItWorks from "@/components/pages/home/seventh-s-how-it-works";
import SixthSection from "@/components/pages/home/sixth-section";
import TenSVideoReview from "@/components/pages/home/ten-s-video-review";
import ThirdSection from "@/components/pages/home/third-section";
import TwelveSection from "@/components/pages/home/twelve-section";

export default function Home() {
  return (
    <>
      <div className="md:min-h-screen flex flex-col mb-8">
        <Header />
        <MainSection />
      </div>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSHowItWorks />
      <EightSGoogleReviews />
      <NinthSEmailSend />
      <TenSVideoReview />
      <EleventhSFinishedWork />
      <div className="md:min-h-screen flex flex-col">
        <TwelveSection />
        <Footer />
      </div>
    </>
  );
}
