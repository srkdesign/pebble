const cards = [
  { label: "Task Completion Heatmap" },
  { label: "Wind Rose and Completion Rate" },
  { label: "Time Spent By Project Diagram" },
  { label: "Daily Focus Score" },
  { label: "Weekly Summary" },
  { label: "Goal Progress" },
];

export const Test = () => {
  return (
    <div className="relative flex items-center justify-center w-full aspect-square max-w-2xl mx-auto">
      {/* CENTER CIRCLE */}
      <div className="bg-white rounded-full z-10 size-1/3 flex flex-col items-center justify-center text-center p-4">
        <h2 className="pbl-heading">
          Mindful{" "}
          <span className="font-display">
            pause <br /> to&nbsp;reflect
          </span>
        </h2>
        <h3 className="pbl-paragraph tracking-tight text-sm">
          Improve your work flow by noticing patterns
        </h3>
      </div>

      {/* ORBIT CARDS */}
      {cards.map((card, i) => {
        const angle = (i / cards.length) * 360 - 90; // start from top
        const radius = 38; // % of container
        const rad = (angle * Math.PI) / 180;
        const x = 50 + radius * Math.cos(rad); // % from left
        const y = 50 + radius * Math.sin(rad); // % from top

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* CONNECTOR LINE */}
            <svg
              className="absolute inset-0 pointer-events-none -z-10 overflow-visible"
              style={{ left: "50%", top: "50%" }}
            >
              <line
                x1="0"
                y1="0"
                x2={`${(50 - x) * 3}px`}
                y2={`${(50 - y) * 3}px`}
                stroke="#d6d3d1"
                strokeWidth="1"
              />
            </svg>

            {/* CARD */}
            <div className="bg-zinc-50 font-bold text-center px-3 py-2 rounded-full text-xs whitespace-nowrap lg:px-8 lg:py-5 lg:text-base">
              {card.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};
