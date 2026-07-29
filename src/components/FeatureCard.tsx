import React from "react";

const FeatureCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <span className="hover:animate-pulse ease-in-out-quad">{icon}</span>
        <h3 className="pbl-title">{title}</h3>
      </div>

      <p className="pbl-paragraph">{text}</p>
    </div>
  );
};

export default FeatureCard;
