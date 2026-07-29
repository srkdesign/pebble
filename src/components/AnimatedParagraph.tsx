import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

const Word = ({
  word,
  progress,
  start,
  end,
  className,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  className?: string;
}) => {
  const rawOpacity = useTransform(progress, [start, end], [0.1, 1]);

  // spring makes it feel physical and smooth
  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  return (
    <motion.span
      style={{ opacity }}
      className={`text-zinc-950 ${className ?? ""}`}
    >
      {word}{" "}
    </motion.span>
  );
};

const AnimatedParagraph = ({
  text,
  highlight,
  highlightClassName,
  className,
}: {
  text: string;
  highlight?: string;
  highlightClassName?: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });

  const before = highlight ? text.split(highlight)[0] : text;
  const beforeWords = before
    .trim()
    .split(" ")
    .map((word) => ({ word, highlighted: false }));
  const afterWords = highlight
    ? highlight
        .trim()
        .split(" ")
        .map((word) => ({ word, highlighted: true }))
    : [];

  const words = [...beforeWords, ...afterWords];

  return (
    <h2 ref={ref} className={`pbl-heading text-stone-500 ${className ?? ""}`}>
      {words.map((item, i) => (
        <Word
          key={i}
          word={item.word}
          progress={scrollYProgress}
          start={i / words.length}
          end={Math.min((i + 1) / words.length, 1)}
          className={item.highlighted ? highlightClassName : undefined}
        />
      ))}
    </h2>
  );
};

export default AnimatedParagraph;
