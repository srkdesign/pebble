import { AndroidIcon, AppleIcon, LinuxIcon, WindowsIcon } from "@icons";
import PrimaryButton from "./PrimaryButton";
import {
  APP_PRIMARY,
  APP_PRIMARY_LINK,
  HERO_HEADING,
  HERO_MEDIA,
  HERO_PARAGRAPH,
} from "@consts/content";
import { Heading } from "./Heading";

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-24 md:gap-44 px-0!">
      <div className="flex flex-col items-center">
        <div className="max-w-2xl text-center flex flex-col items-center gap-2">
          <h1 className="pbl-heading text-h1-fluid! leading-[115%]">
            {HERO_HEADING.map((l, idx) => (
              <>
                <Heading key={idx} text={l}></Heading>
                <br />
              </>
            ))}
          </h1>
          <h2 className="pbl-paragraph max-w-[32ch]">{HERO_PARAGRAPH}</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <PrimaryButton
            initial={APP_PRIMARY[0]}
            hover={APP_PRIMARY[1]}
            onPress={() => open(APP_PRIMARY_LINK)}
          />
          <div className="flex gap-4 [&_svg]:fill-zinc-300">
            <AppleIcon size={32} color="currentColor" />
            <div className="[&_svg]:stroke-zinc-300">
              <WindowsIcon size={32} color="currentColor" />
            </div>
            <LinuxIcon size={32} color="currentColor" />
            <AndroidIcon size={32} color="currentColor" />
          </div>
        </div>
      </div>

      <div className="pbl-bg w-full h-240 p-16 flex flex-col items-center justify-center rounded-3xl">
        <div className="rounded-4xl overflow-hidden">
          {HERO_MEDIA.type === "video" ? (
            <video
              key="video"
              src={HERO_MEDIA.src}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img key="image" src={HERO_MEDIA.src} alt="Demo of the app" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
