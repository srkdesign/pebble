import { Link, PrimaryButton, TertiaryButton } from "@components/index";
import {
  APP_NAME,
  APP_PRIMARY,
  APP_PRIMARY_LINK,
  APP_SECONDARY,
  APP_SECONDARY_LINK,
  BUILT_BY,
  BUILT_BY_LINK,
  CTA_HEADING,
  CTA_PARAGRAPH,
  LICENSE,
  LICENSE_LINK,
} from "@consts/content";
import { Heading } from "./Heading";

const Footer = () => {
  const YEAR = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center gap-14 px-0!">
      <section className="pbl-bg flex flex-col items-center py-32 w-full *:text-center">
        <h2 className="pbl-heading pbl-heading-condensed">
          <Heading text={CTA_HEADING}></Heading>
        </h2>
        <p className="pbl-paragraph md:max-w-md">{CTA_PARAGRAPH}</p>
        <div className="flex [&>button]:nth-[2]:bg-white! [&>button]:nth-[2]:text-zinc-950!">
          <PrimaryButton
            initial={APP_PRIMARY[0]}
            hover={APP_PRIMARY[1]}
            onPress={() => open(APP_PRIMARY_LINK)}
          />
          <PrimaryButton
            initial={APP_SECONDARY[0]}
            hover={APP_SECONDARY[1]}
            onPress={() => open(APP_SECONDARY_LINK)}
          />
        </div>
      </section>
      <div className="pbl-container-compact">
        <p className="pbl-paragraph text-base! text-center leading-relaxed">
          {" "}
          © {YEAR} {APP_NAME} by{" "}
          <Link href={BUILT_BY_LINK} text={BUILT_BY} openInNewTab /> licensed
          under <Link href={LICENSE_LINK} text={LICENSE} openInNewTab />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
