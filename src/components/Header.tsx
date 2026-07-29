import TertiaryButton from "@components/TertiaryButton";
import { useModalStore } from "../stores/ModalStore";
import { motion, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  APP_PRIMARY,
  APP_PRIMARY_LINK,
  APP_SECONDARY,
  NAVLINKS,
} from "@consts/content";

const Header = () => {
  const openModal = useModalStore((state) => state.openModal);

  const opacity = useMotionValue(1);
  const lastY = useMotionValue(0);

  const opacityRef = useRef(opacity);
  const lastYRef = useRef(lastY);

  const [isUserSelectable, setIsUserSelectable] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const prev = lastYRef.current.get();

      if (current < 10) {
        opacityRef.current.set(1);
        setIsUserSelectable(true);
      } else if (current < prev) {
        opacityRef.current.set(1);
        setIsUserSelectable(true);
      } else {
        opacityRef.current.set(0);
        setIsUserSelectable(false);
      }

      lastYRef.current.set(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{ opacity }}
      className={`sticky top-0 left-0 transition-opacity duration-500 ease-in-out-quad z-30 ${isUserSelectable ? "select-auto pointer-events-auto" : "select-none pointer-events-none"}`}
    >
      <div className="relative w-full flex flex-row! items-center! justify-between! py-4">
        <a className="max-w-36">
          <img src="/logo/light.png" alt="" />
        </a>
        <nav className="hidden md:block absolute top-1/2 left-1/2 -translate-1/2">
          <ul className="flex items-baseline gap-16 text-stone-500">
            {NAVLINKS.map((l, idx) => (
              <li key={idx}>
                <a
                  href={l.ref}
                  className="hover:text-zinc-950 transition-colors duration-500"
                >
                  {l.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex">
          <TertiaryButton
            text={APP_SECONDARY[0]}
            style="bg-zinc-50"
            onPress={() => {
              openModal();
            }}
          />
          <TertiaryButton
            text={APP_PRIMARY[0].split(" ")[0]}
            style="bg-zinc-50"
            onPress={() => open(APP_PRIMARY_LINK)}
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
