import { Button, type ButtonProps } from "@heroui/react";

type Props = ButtonProps & {
  text: string;
  initial?: string;
  hover?: string;
  style?: string;
};

const TertiaryButton = ({ text, style, ...props }: Props) => {
  return (
    <Button
      variant="tertiary"
      className={`${style} bg-zinc-50 relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:translate-y-full before:bg-zinc-100 before:transition-transform before:ease-in-out-fluid before:duration-500 hover:before:translate-y-0`}
      {...props}
    >
      <span className="relative">{text}</span>
    </Button>
  );
};

export default TertiaryButton;
