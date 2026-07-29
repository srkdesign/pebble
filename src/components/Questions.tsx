import Link from "@components/Link";
import Question from "@components/Question";
import { FAQ_CARDS, FAQ_HEADING, FAQ_OTHER, MAIL } from "@consts/content";
import { Heading } from "./Heading";

const Questions = () => {
  return (
    <section
      className="pbl-container-compact flex flex-col justify-center items-center gap-12 md:gap-24"
      id="faq"
    >
      <h2 className="pbl-heading pbl-heading-condensed text-center">
        <Heading text={FAQ_HEADING} />
      </h2>
      <div className="text-start flex flex-col gap-4">
        {FAQ_CARDS.map((i, idx) => (
          <Question key={idx} question={i.question} answer={i.answer} />
        ))}
        <p className="pbl-paragraph text-lg!">
          {FAQ_OTHER} <Link href={`mailto:${MAIL}`} text={MAIL} />
        </p>
      </div>
    </section>
  );
};

export default Questions;
