import {
  Diagram,
  Footer,
  Header,
  Hero,
  HowItWorks,
  Interface,
  Questions,
  PricingModal,
} from "@components/index";
import Pricing from "@components/Pricing";

function App() {
  return (
    <main className="max-w-384 *:not-[pb-bg]:px-4 mx-auto *:w-full *:flex *:flex-col *:justify-center flex flex-col gap-24 md:gap-44 items-center antialiased *:scroll-mt-32">
      <Header />
      <Hero />
      <HowItWorks />
      <Interface />
      <Diagram />
      <Pricing />
      <Questions />
      <Footer />
      <PricingModal />
    </main>
  );
}

export default App;
