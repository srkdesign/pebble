import { Button, type ButtonProps } from "@heroui/react";

type Props = ButtonProps & {
  initial?: string;
  hover?: string;
};

const HoverButton = ({ initial, hover, ...props }: Props) => {
  return (
    <Button
      variant="primary"
      size="lg"
      className="group pbl-button relative inline-flex items-center justify-center overflow-hidden bg-zinc-950 transition-all duration-450"
      {...props}
    >
      <div className="translate-y-0 opacity-100 transition-all duration-450 ease-in-out-fluid group-hover:-translate-y-[150%] group-hover:opacity-0">
        {initial}
      </div>
      <div className="absolute translate-y-[150%] opacity-0 transition-all duration-450 ease-in-out-fluid group-hover:translate-y-0 group-hover:opacity-100">
        {hover}
      </div>
    </Button>
  );
};

export default HoverButton;
