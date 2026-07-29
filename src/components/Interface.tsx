import { INTERFACE_TABS } from "@consts/content";
import { Tabs } from "@heroui/react";
import {
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleArrowDown,
  Copy,
  PanelLeft,
  Plus,
  Share,
} from "lucide-react";

const Interface = () => {
  return (
    <section
      className="pbl-container pbl-bg pt-24 pb-32 md:pt-32 md:pb-0"
      id="interface"
    >
      <div className="flex flex-col gap-12 md:gap-16 items-center">
        <h2 className="pbl-heading pbl-heading-condensed text-center leading-[120%]">
          The <span className="font-display">best&nbsp;interface</span> is the
          one you forget is there
        </h2>
        <Tabs className="flex flex-col items-center max-w-5xl">
          <Tabs.ListContainer className="w-min">
            <Tabs.List
              aria-label="Options"
              className="*:w-auto pbl-bg *:data-[selected=true]:text-zinc-50 *:data-[selected=true]:font-bold *:data-[selected=true]:tracking-tight mb-22"
            >
              {INTERFACE_TABS.map((t, idx) => (
                <Tabs.Tab
                  key={idx}
                  id={`${t.slug}-tab`}
                  className="bg-white py-6 md:px-6 px-5.5"
                >
                  <div className="flex gap-1.5 items-center">
                    {" "}
                    {t.icon}
                    <h3 className="font-inherit capitalize md:text-lg">
                      {t.slug}
                    </h3>
                  </div>
                  <Tabs.Indicator className="bg-zinc-950 shadow-none" />
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs.ListContainer>
          {INTERFACE_TABS.map((t, idx) => (
            <Tabs.Panel key={idx} id={`${t.slug}-tab`} className="p-0">
              <div className="md:w-full px-2 md:px-0">
                {/* SAFARI WINDOW */}
                <div className="hidden md:block rounded-t-2xl bg-white">
                  <div className="relative flex items-center justify-between py-3 px-5">
                    <div className="flex gap-6 text-stone-500">
                      <div className="flex items-center gap-2">
                        <div className="size-3 bg-red-400 border border-red-500 rounded-full"></div>
                        <div className="size-3 bg-yellow-400 border border-yellow-500 rounded-full"></div>
                        <div className="size-3 bg-green-400 border border-green-500 rounded-full"></div>
                      </div>
                      <div className="hidden md:flex items-center gap-2">
                        {" "}
                        <PanelLeft size={20} strokeWidth={1.75} />
                        <ChevronDown size={14} strokeWidth={2} />
                      </div>
                      <div className="hidden md:flex gap-2">
                        <ChevronLeft strokeWidth={1.5} />
                        <div className="text-neutral-200">
                          <ChevronRight strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-1/2 gap-1.5 border border-stone-200 rounded-lg p-1 w-1/2 justify-center items-center text-stone-500 font-medium tracking-tight">
                      <p className="text-xs">pebble.local</p>
                    </div>
                    <div className="flex items-center gap-5.5 text-neutral-500">
                      <CircleArrowDown size={20} strokeWidth={1.75} />
                      <Share size={20} strokeWidth={1.75} />
                      <Plus size={22} strokeWidth={1.75} />
                      <Copy size={20} strokeWidth={1.75} />
                    </div>
                  </div>
                </div>
                {/* PAGE CONTENT */}
                <div className="aspect-9/14 md:aspect-auto md:min-h-96  md:max-h-96 xl:w-5xl bg-zinc-100 flex justify-center overflow-hidden rounded-t-3xl md:rounded-t-none">
                  <img
                    src={t.content}
                    alt=""
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
                {/* MOBILE SAFARI */}
                <div className="relative flex md:hidden w-full flex-col gap-3 pt-4 pb-8 px-4.5 bg-white rounded-b-3xl border-t border-stone-300">
                  <div className="rounded-xl bg-white shadow py-2.5 flex justify-center text-stone-500">
                    <p className="text-sm">pebble.local</p>
                  </div>
                  <div className="flex justify-between items-center -ml-2 text-neutral-500">
                    <ChevronLeft size={32} strokeWidth={1.5} />
                    <div className="text-neutral-200">
                      <ChevronRight size={32} strokeWidth={1.5} />
                    </div>
                    <Share size={24} strokeWidth={1.5} />
                    <BookOpen size={24} strokeWidth={1.5} />
                    <Copy size={24} strokeWidth={1.5} />
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-1/2 w-1/3 h-1 bg-zinc-950 rounded-full"></div>
                </div>
              </div>
            </Tabs.Panel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Interface;
