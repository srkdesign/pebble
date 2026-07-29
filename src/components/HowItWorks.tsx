import FeatureCard from "@components/FeatureCard";
import AnimatedParagraph from "./AnimatedParagraph";
import { ANIMATED_TEXT, FEATURE_CARDS } from "@consts/content";

const HowItWorks = () => {
  return (
    <section
      className="pbl-container-compact gap-16 md:gap-32"
      id="architecture"
    >
      <AnimatedParagraph
        text={ANIMATED_TEXT.replace("*", "")}
        highlight={ANIMATED_TEXT?.match(/\*(.*?)\*/)?.[1] ?? ""}
        highlightClassName="font-display leading-[110%]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-9 md:gap-y-18">
        {FEATURE_CARDS.map((c, idx) => (
          <FeatureCard key={idx} icon={c.icon} title={c.title} text={c.text} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
