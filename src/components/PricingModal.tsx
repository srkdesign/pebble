import { Modal } from "@heroui/react";
import { useModalStore } from "../stores/ModalStore";
import { PURCHASE_LINKS, PURCHASE_PREVIEW } from "@consts/content";
import { SquareArrowOutUpRight } from "lucide-react";

export function PricingModal() {
  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <Modal>
      <Modal.Backdrop
        isOpen={isOpen}
        onOpenChange={(open) => {
          if (!open) {
            closeModal();
          }
        }}
      >
        <Modal.Container>
          <Modal.Dialog>
            <Modal.Header className="flex flex-col gap-1.5">
              <Modal.Heading className="pbl-title text-2xl! max-w-[24ch] mb-0! font-serif leading-tight!">
                Thank you for&nbsp;supporting
              </Modal.Heading>
              <p className="pbl-paragraph text-sm! mb-0! pb-3">
                Choose where you would like to&nbsp;purchase the theme
              </p>
              <Modal.CloseTrigger className="p-4 m-1.5" />
            </Modal.Header>

            <Modal.Body className="flex flex-col gap-5">
              <div className="rounded-2xl overflow-hidden">
                <img src={PURCHASE_PREVIEW} alt="Preview of a theme" />
              </div>
              <ul className="flex flex-col gap-2 ">
                {PURCHASE_LINKS.map((l, idx) => (
                  <li
                    key={idx}
                    className="group flex bg-zinc-50 rounded-2xl hover:bg-zinc-950 hover:text-zinc-50 text-zinc-950 transition-all ease-out-circ"
                  >
                    <a
                      href={l.href}
                      target="_blank"
                      className="flex justify-between items-center p-4 w-full min-h-full"
                    >
                      <div className="flex flex-col">
                        <span className="text-inherit font-semibold text-sm">
                          {l.title}
                        </span>
                        {/* <span className="text-zinc-500 group-hover:text-zinc-50">
                          {l.description}
                        </span> */}
                      </div>

                      <SquareArrowOutUpRight size={16} strokeWidth={2.25} />
                    </a>
                  </li>
                ))}
              </ul>
            </Modal.Body>

            {/* <Modal.Footer className="*:w-full">
              <Button
                variant="tertiary"
                onPress={closeModal}
                className="min-h-12"
              >
                Close
              </Button>
            </Modal.Footer> */}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
