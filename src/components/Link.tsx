const Link = ({
  href,
  text,
  openInNewTab,
}: {
  href: string;
  text: string;
  openInNewTab?: boolean;
}) => {
  return (
    <a
      href={href}
      target={`${openInNewTab ? "_blank" : ""}`}
      rel={`${openInNewTab ? "noopener noreferrer" : ""}`}
      className="relative bg-linear-to-l from-stone-500 to-stone-500 bg-size-[100%_1px,0_1px] bg-position-[100%_100%,0_100%] bg-no-repeat text-stone-500 transition-all duration-500 ease-out hover:bg-size-[0_1px,100%_1px] hover:text-zinc-950 "
    >
      <span className="[text-shadow:1px_0_white,-1px_0_white,0_1px_white,0_-1px_white,2px_0_white,-2px_0_white,0_2px_white,0_-2px_white,2px_0_white,-2px_0_white,0_2px_white,0_-4px_white]">
        {text}
      </span>
    </a>
  );
};

export default Link;
