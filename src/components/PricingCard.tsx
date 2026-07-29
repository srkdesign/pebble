import { TasksIcon } from "@icons";

import PrimaryButton from "./PrimaryButton";
import { useModalStore } from "../stores/ModalStore";
import { APP_SECONDARY_LINK } from "@consts/content";

const PricingCard = ({
  title,
  features,
  price,
  action,
}: {
  title: string;
  features: Array<string>;
  price: string;
  action: Array<string>;
}) => {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <div className="bg-zinc-100 text-zinc-950 last:text-zinc-50 last:bg-zinc-900 [&>button]:bg-zinc-200 [&>button]:text-zinc-950 last:[&>button]:bg-zinc-50 last:[&>button]:text-zinc-950 [&>hr]:border-stone-300 last:[&>hr]:border-stone-700 p-6 rounded-3xl flex flex-col gap-6 pb-8">
      <div className="flex flex-col gap-0">
        <h3 className="pbl-title mb-0! font-serif text-2xl!">{title}</h3>
        <h4 className="pbl-title font-display text-2xl! pt-2">{price}</h4>
      </div>
      <PrimaryButton
        initial={action[0]}
        hover={action[1]}
        onPress={() => {
          if (action[2] === APP_SECONDARY_LINK) {
            openModal();
            return;
          }

          open(action[2]);
        }}
        style={{ width: "100%" }}
      />
      <hr />
      <ul className="flex flex-col gap-2">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-2 text-base">
            <div className="shrink-0">
              <TasksIcon size={24} color="currentColor" />
            </div>

            {f}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
