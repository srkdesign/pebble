import { Heading } from "./Heading";
import {
  PRICING_CARDS,
  PRICING_HEADING,
  PRICING_PARAGRAPH,
} from "@consts/content";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section
      className="pbl-container-compact flex flex-col justify-center items-center gap-12 md:gap-24"
      id="pricing"
    >
      <div className="flex flex-col">
        <h2 className="pbl-heading pbl-heading-condensed text-center">
          <Heading text={PRICING_HEADING} />
        </h2>
        <h3 className="pbl-paragraph max-w-[32ch] mb-0! tracking-tight text-center">
          {PRICING_PARAGRAPH}
        </h3>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-18">
        {PRICING_CARDS.map((c, idx) => (
          <PricingCard
            key={idx}
            title={c.title}
            features={c.features}
            price={c.price}
            action={c.action}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
