import { useBreakpoint } from "../hooks/useBreakpoint";

import { Heading } from "@components/Heading";

import {
  DIAGRAM_CARDS,
  DIAGRAM_HEADING,
  DIAGRAM_PARAGRAPH,
} from "@consts/content.tsx";

const Diagram = () => {
  const isDesktop = useBreakpoint();

  const radiusX = isDesktop ? 32 : 34;
  const radiusY = isDesktop ? 36 : 48;

  const getPosition = ({
    angle,
    radiusX = 25,
    radiusY = 25,
  }: {
    angle: number;
    radiusX?: number;
    radiusY?: number;
  }) => {
    const radians = (angle * Math.PI) / 180;

    const x = 50 + radiusX * Math.cos(radians);
    const y = 50 + radiusY * Math.sin(radians);

    return { x, y };
  };

  return (
    <div
      className="pbl-container relative w-5xl aspect-9/12 sm:aspect-square mx-auto"
      id="analytics"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {DIAGRAM_CARDS.map((c, idx) => {
          const { x, y } = getPosition({
            angle: c.angle,
            radiusX: radiusX,
            radiusY: radiusY,
          });
          return (
            <line
              key={idx}
              x1="50%"
              y1="50%"
              x2={`${x}%`}
              y2={`${y}%`}
              stroke="url(#lineGrad)"
              className="stroke-stone-300
              stroke-1 opacity-0 sm:opacity-100"
            ></line>
          );
        })}
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full size-2/3 md:size-1/3 flex flex-col items-center justify-center text-center z-10">
        <h2 className="pbl-heading">
          <Heading text={DIAGRAM_HEADING} />
        </h2>
        <h3 className="pbl-paragraph max-w-xs mb-0! tracking-tight">
          {DIAGRAM_PARAGRAPH}
        </h3>
      </div>
      {DIAGRAM_CARDS.map((c, idx) => {
        const { x, y } = getPosition({
          angle: c.angle,
          radiusX: radiusX,
          radiusY: radiusY,
        });
        return (
          <div
            key={idx}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            className="bg-zinc-50 py-3 md:py-6 px-6 md:px-12 w-48 md:w-auto rounded-full font-bold text-sm md:text-lg whitespace-nowrap border-12 md:border-32 xl:border-54 2xl:border-96 border-white text-center z-20"
          >
            {isDesktop ? c.label : c.label_mobile}
          </div>
        );
      })}
    </div>
  );
};

export default Diagram;
